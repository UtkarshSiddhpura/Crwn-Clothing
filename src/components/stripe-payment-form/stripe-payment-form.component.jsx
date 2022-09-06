import { useState } from "react";
import {
	FormContainer,
	Form,
	PaymentButton,
} from "./stripe-payment-form.styles";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const StripePaymentForm = () => {
	const amount = useSelector(selectCartTotal);
	const user = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch(
			"/.netlify/functions/create-payment-intent",
			{
				method: "post",
				headers: {
					contentType: "application/json",
				},
				body: JSON.stringify({ amount: amount*100 }),
			}
		).then((res) => res.json());

		const client_secret = response.paymentIntent.client_secret;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: user ? user.displayName : "Guest",
				},
			},
		});
		console.log(paymentResult);
		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else if (paymentResult.paymentIntent.status === "succeeded") {
			alert("Payment Successful");
		}
	};

	return (
		<FormContainer>
			<Form onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<PaymentButton
					isLoading={isProcessingPayment}
					buttonType={BUTTON_TYPE_CLASSES.inverted}
				>
					Pay Now
				</PaymentButton>
			</Form>
		</FormContainer>
	);
};

export default StripePaymentForm;
