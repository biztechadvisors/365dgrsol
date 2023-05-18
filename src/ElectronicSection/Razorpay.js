import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// Razor End_____________________

async function loadScript(src) {
	return new Promise((resolve) => {
	  const script = document.createElement('script')
	  script.src = src
	  script.onload = () => {
		resolve(true)
	  }
	  script.onerror = () => {
		resolve(false)
	  }
	  document.body.appendChild(script)
	})
  }
  
  const __DEV__ = document.domain === 'localhost'
  
  // Razor End_____________________
  

// RazorPay -----
function Razorpay(){
async function displayRazorpay() {
    const isRazorpayLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!isRazorpayLoaded) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }
  
    try {
      const res = await fetch('http://biztekminds.com/mycoolapp/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: totalPrice
        })
      })
  
      const data = await res.json()
      const options = {
        key: __DEV__ ?  'rzp_test_G3jd9GdCpbvmdr': 'PRODUCTION_KEY',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'My Cool App',
        description: 'Payment for items',
        image: '/logo.svg',
        handler: function (response) {
          alert(response.razorpay_payment_id)
          alert(response.razorpay_order_id)
          alert(response.razorpay_signature)
        },
        prefill: {
          name: 'Ajay',
          email: 'ajaymalviya565656@gmail.com.com',
          phone_number: '9899999999'
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (error) {
      console.error(error)
      alert('Failed to fetch data from the server.')
    }
  }

  // RazorPay  End-------

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Donate $5
				</a>
			</header>
		</div>
	)
}

export default Razorpay

// logistic getway integration code

npm install shiprocket --save

const ShipRocketAPI = require('shiprocket');

const api = new ShipRocketAPI({
  email: 'YOUR_EMAIL_ADDRESS',
  password: 'YOUR_PASSWORD',
  //OR
  token: 'YOUR_API_TOKEN',
});

// use the api object to call ShipRocket APIs

api.post('/v1/external/orders/create', {
  order_id: 'YOUR_ORDER_ID',
  billing_customer_name: 'CUSTOMER_NAME',
  billing_last_name: 'CUSTOMER_LAST_NAME',
  billing_address: 'CUSTOMER_ADDRESS',
  billing_city: 'CUSTOMER_CITY',
  billing_pincode: 'CUSTOMER_PINCODE',
  billing_country: 'CUSTOMER_COUNTRY',
  billing_email: 'CUSTOMER_EMAIL',
  billing_phone: 'CUSTOMER_PHONE',
  shipping_is_billing: true,
  shipping_customer_name: 'CUSTOMER_NAME',
  shipping_last_name: 'CUSTOMER_LAST_NAME',
  shipping_address: 'CUSTOMER_ADDRESS',
  shipping_city: 'CUSTOMER_CITY',
  shipping_pincode: 'CUSTOMER_PINCODE',
  shipping_country: 'CUSTOMER_COUNTRY',
  order_items: [
    {
      name: 'PRODUCT_NAME',
      sku: 'PRODUCT_SKU',
      units: 'PRODUCT_QUANTITY',
      selling_price: 'PRODUCT_PRICE',
      discount: 'PRODUCT_DISCOUNT',
      tax: 'PRODUCT_TAX',
      hsn: 'PRODUCT_HSN',
    },
  ],
  shipping_charges: 'SHIPPING_CHARGES',
  transaction_charges: 'TRANSACTION_CHARGES',
  order_total: 'ORDER_TOTAL',
  payment_method: 'PAYMENT_METHOD',
});

api.post('/v1/external/courier/generate/label', {
  order_id: 'YOUR_ORDER_ID',
});

// Client Side code

import axios from 'axios';

const createOrder = (orderData) => {
  return axios.post('/create-order', orderData)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

const handleSubmit = (event) => {
  event.preventDefault();
  const orderData = {
    // get all the form input values and store them in orderData object
  };
  createOrder(orderData)
    .then(data => {
      // handle the response data, such as displaying a success message to the user
    })
    .catch(error => {
      // handle the error, such as displaying an error message to the user
    });
};

const generateShippingLabel = (orderId) => {
  return axios.post('/generate-shipping-label', { orderId })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

createOrder(orderData)
  .then(data => {
    generateShippingLabel(data.orderId)
      .then(data => {
        // handle the response data, such as displaying the shipping label to the user
      })
      .catch(error => {
        // handle the error, such as displaying an error message to the user
      });
  })
  .catch(error => {
    // handle the error, such as displaying an error message to the user
  });
