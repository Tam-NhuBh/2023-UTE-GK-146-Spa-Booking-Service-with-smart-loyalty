import React from "react";
import ReactDOM from "react-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Axios from 'axios'
import { useEffect, useState, useContext } from 'react';



const PayPalPayment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        Axios.get('http://localhost:8000/cart/onCart')
          .then((response) => {
            if (response.status != 200) {
              throw new Error('Network response was not ok');
            }
            return response.data.results; // Access the 'results' key
          })
          .then((data) => {
            setProducts(data);
            setIsLoading(false); // Set loading to false when data is fetched
          })
          .catch((error) => {
            setError(error.message || 'Error fetching data');
            setIsLoading(false); // Set loading to false on error
          });
      }, []);

 const createOrder = (data) => {
    const productData = products; // Assuming there is only one product in the array
    return fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productPayment: [
          {
            nameProducts: productData.nameProduct,
            prices: productData.price,
            quantitys: productData.quantity,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => {
        console.log("Order created:", order);
        return order.id;
      })
      .catch((error) => {
        console.error("Failed to create order:", error);
        throw new Error("Failed to create order");
      });
  };
  const onApprove = (data, actions) => {
    return fetch(`http://localhost:8000/api/orders/${data.orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to capture order");
        }
        console.log("Payment Successfully");
        return response.json();
      })
      .catch((error) => {
        console.error("Failed to capture order:", error);
        throw new Error("Failed to capture order");
      });
  };

  return (
    <PayPalButtons
      createOrder={() => createOrder()}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPalPayment;
