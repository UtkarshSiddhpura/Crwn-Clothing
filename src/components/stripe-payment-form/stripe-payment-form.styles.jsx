import styled from "styled-components";
import Button from "../button/button.component";

export const FormContainer = styled.div`
	margin-top: 1rem;
	padding: 1rem 0;
	border-top: 2px solid cyan;
	align-self: flex-start;

	h2 {
		margin-bottom: 1rem;
	}
`;

export const Form = styled.form`
	min-width: min(520px, 95vw);
`;

export const PaymentButton = styled(Button)`
	width: 10rem;
	height: 3.5rem;
	margin-top: 1.4rem;
`;
