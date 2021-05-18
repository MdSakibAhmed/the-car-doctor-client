import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51IeAvESAxlZBXA7dIcbdEmUXQ1dmZAyV7tJlfOYHDQdjA1EVvwJMBuZUWtb3Wa7IYI3mgEqocrej6Uf8luLbTfq500gl5p2OBF');
const ProcessPayment = ({saveOrderOnDatabase}) => {
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm saveOrderOnDatabase={saveOrderOnDatabase}></CheckoutForm>

        </Elements>
    );
};

export default ProcessPayment;