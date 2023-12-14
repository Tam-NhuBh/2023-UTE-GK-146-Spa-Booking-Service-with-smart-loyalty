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

// This value is from the props in the UI
const style = { "layout": "vertical" };

function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: "1blwyeo8",
                    quantity: 2,
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => {
            // Your code here after create the order
            return order.id;
        });
}
function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID,
        }),
    })
        .then((response) => response.json())
        .then((orderData) => {
            // Your code here after capture the order
        });
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

const BillPage = () => {
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const bookingInfoString = localStorage.getItem("bookingChoices");
    const idUser = localStorage.getItem("idUser");
    const servicePrice = localStorage.getItem("selectedServicePrice");
    const bookingInfo = JSON.parse(bookingInfoString);
    const navigate = useNavigate();
    
    // Check if bookingInfo is null or undefined
    if (!bookingInfoString) {
        return <div>Error: Booking information not available.</div>;
    }

    const handleCheckout = async () => {
        try {
            const res = await Axios.post('http://localhost:8000/booking/submitBooking', {
                idServiceBooking: bookingInfo.bookingId,
                idUser: idUser,
                idEmployee: bookingInfo.selectedStaffId,
                idService: bookingInfo.selectedServiceId,
                startDate: bookingInfo.dateTime,
            });

            if (res.data.Status === 'Success') {
                console.log('Booking Successful');
                const idServiceBooking = res.data.bookingId;
                // Redirect to the confirmation page
                navigate(`/`);
                setBookingSuccess(true);
                localStorage.removeItem("bookingChoices");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

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
                    <BookingInfo label="Giá dịch vụ" value={`${servicePrice}đ`} />
                    {bookingInfo.addition && (
                        <BookingInfo label="Bổ sung" value={bookingInfo.addition} />
                    )}
                </Box>
                <Divider />
                <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <label>
                            <strong>Select Discount:</strong>
                        </label>
                        <Select
                            value={selectedDiscount}
                            onChange={(e) => setSelectedDiscount(e.target.value)}
                            style={{ minWidth: 150 }}
                        >
                            <MenuItem value="">No Discount</MenuItem>
                            <MenuItem value="discount1">Discount 1</MenuItem>
                            <MenuItem value="discount2">Discount 2</MenuItem>
                        </Select>
                    </Box>
                    <div style={{ width: "100%" }}>
                        <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
                            <ButtonWrapper showSpinner={false} />
                        </PayPalScriptProvider>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default BillPage;
