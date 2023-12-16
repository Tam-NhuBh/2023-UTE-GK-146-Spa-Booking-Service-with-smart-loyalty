const fetch = require('node-fetch');

const PAYPAL_CLIENT_ID = "AR_zn87-BAB8f449hDKaL3kAmpQ_F1P9hsm_qUQY8IXIMTASxZLCUGgNX83xMTEXQVR_NLyrZps_uJwl";
const PAYPAL_CLIENT_SECRET = "EPXkLy0snk_FdYnfuqneECC8cq9ubzj9D9jFq-8mbPItzcJVgF7YfNRZrtkJQTRxvj7nmMUe3JzooGLR";
const base = "https://api-m.sandbox.paypal.com";


const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

const createOrder = async (data) => {
  const productData = data.productPayment[0]; // Assuming there's only one product

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
            currency_code: "USD",
            value: productData.quantity * productData.price,
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

module.exports = {
  generateAccessToken,
  createOrder,
  captureOrder,
  handleResponse,
};