import {
    Grid,
    Box,
    Container,
    Divider,
    Typography,
    Stack,
    Button,
    Select,
    MenuItem
} from "@mui/material";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BookingInfo from './BookingInfo';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import html2pdf from "html2pdf.js";


const BillPage = () => {
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const bookingInfoString = localStorage.getItem("bookingChoices");
    const idUser = localStorage.getItem("idUser");
    const servicePrice = localStorage.getItem("selectedServicePrice");

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // Set this to 0 to avoid decimal places
    }).format(servicePrice);

    const bookingInfo = JSON.parse(bookingInfoString);
    const navigate = useNavigate();


    // Check if bookingInfo is null or undefined
    if (!bookingInfoString) {
        return <div>Error: Booking information not available.</div>;
    }

    const generatePDF = () => {
        // Get the HTML content of the component
        const content = document.getElementById("pdf-content");

        // Configuration for html2pdf
        const options = {
            margin: 10,
            filename: 'booking_confirmation.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Generate the PDF
        html2pdf().from(content).set(options).outputPdf();
    };

    const handleCheckout = async () => {
        try {
            // Get the current date and time
            const currentDate = new Date();

            // Format the date as needed (you may want to adjust this based on your requirements)
            const formattedStartDate = currentDate.toISOString();

            const res = await Axios.post('http://localhost:8000/booking/submitBookingPayment', {
                idPaymentService: bookingInfo.bookingId,
                // namePayment: bookingInfo.selectedService,
                idUser: idUser,
                // idEmployee: bookingInfo.selectedStaffId,
                idService: bookingInfo.selectedServiceId,
                // startDate: bookingInfo.dateTime,
                createDate: bookingInfo.dateTime,
                bank: "PayPal",
                price: servicePrice
            });

            const res1 = await Axios.post('http://localhost:8000/booking/submitBooking', {
                idServiceBooking: bookingInfo.bookingId,
                namePayment: bookingInfo.selectedService,
                idUser: idUser,
                idEmployee: bookingInfo.selectedStaffId,
                idService: bookingInfo.selectedServiceId,
                startDate: bookingInfo.dateTime,
                // createDate: formattedStartDate,
                // bank: "PayPal",
                // price: servicePrice
            });

            if (res.data.Status === 'Success' && res1.data.Status === 'Success') {
                console.log('Booking Successful');
                const idServiceBooking = res.data.bookingId;
                // Generate PDF
                generatePDF();
                // Redirect to the confirmation page
                navigate(`/`);
                setBookingSuccess(true);
                localStorage.removeItem("bookingChoices");
            }


        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // This value is from the props in the UI
    const style = { "layout": "vertical" };

    const createOrder = async () => {
        try {
            console.log("price at frontend:", servicePrice)
            const response = await fetch("http://localhost:8000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // use the "body" param to optionally pass additional order information
                // like product ids and quantities
                body: JSON.stringify({
                    service: [
                        {
                            name: bookingInfo.selectedService,
                            price: servicePrice,

                        },
                    ],
                }),
            });

            const orderData = await response.json();

            if (orderData.id) {
                console.log("something:", orderData.id)
                return orderData.id;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
        }
    }

    const onApprove = async (data, actions) => {
        try {
            const response = await fetch(`http://localhost:8000/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const orderData = await response.json();
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
            } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
            } else if (!orderData.purchase_units) {
                throw new Error(JSON.stringify(orderData));
            } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =
                    orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                    orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                resultMessage(
                    `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
                );
                console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2),
                );

                // Optionally, you can show a confirmation message to the user
                resultMessage(
                    `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
                );
            }
        } catch (error) {
            console.error(error);
            resultMessage(
                `Sorry, your transaction could not be processed...<br><br>${error}`,
            );
        }
    }

    function resultMessage(message) {
        const container = document.querySelector("#result-message");
        container.innerHTML = message;
    }

    // Custom component to wrap the PayPalButtons and show loading spinner
    const ButtonWrapper = ({ showSpinner }) => {
        const [{ isPending }] = usePayPalScriptReducer();

        return (
            <>
                {(showSpinner && isPending) && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[style]}
                    fundingSource={undefined}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </>
        );
    }

    return (
        <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffa5db' }}>
            <style>
                {`
        body, html {
          margin: 0;
          padding: 0;
        }
        `}
            </style>
            <Box p={4} width="90%" maxWidth={1000} borderRadius={8} boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" backgroundColor="#fff">
                <Typography textAlign="center" fontSize={26} fontWeight="bold" color="#333" marginBottom={3}>
                    Xác nhận lịch
                </Typography>
                <Box mt={2}>
                    <BookingInfo label="Dịch vụ" value={bookingInfo.selectedService} />
                    <BookingInfo label="KTV" value={bookingInfo.selectedStaff} />
                    <BookingInfo label="Phòng Khám" value={bookingInfo.selectedClinic} />
                    <BookingInfo label="Ngày sử dụng dịch vụ" value={bookingInfo.dateTime} />
                    <BookingInfo label="Giá dịch vụ" value={`${formattedPrice}`} />
                    {bookingInfo.addition && (
                        <BookingInfo label="Bổ sung" value={bookingInfo.addition} />
                    )}
                </Box>
                <Divider />
                <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <div style={{ width: "100%" }}>
                        <PayPalScriptProvider
                            options={{
                                clientId: "AWAxgP-M2M7V_2mbJREIZzVDdScS_E2q3E80g1FvIsgSPf0K1-HO9EffwzrB7V9npHotRBNufImxPZcV",
                                components: "buttons",
                                currency: "USD"
                            }}>
                            <ButtonWrapper showSpinner={false} />
                        </PayPalScriptProvider>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleCheckout}>
                        Back to homepage
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default BillPage;
