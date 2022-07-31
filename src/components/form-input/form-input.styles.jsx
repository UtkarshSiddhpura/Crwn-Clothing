import styled from "styled-components";

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 1.2rem 0;
	max-width: 600px;
	overflow: hidden;
`;

export const Label = styled.label`
	font-weight: 700;
	font-size: 15px;
	color: grey;
	transform: translate(0, 0) scale(1);
	transition: all 0.2s;
	opacity: 1;
	visibility: visible;
`;

export const Input = styled.input`
	display: block;
	border: none;
	border-bottom: 2px solid lightgrey;
	outline: none;
	font-size: 20px;
	font-family: inherit;
	color: #282828;
	padding: 0.6rem 0.4rem 0.4rem 0.4rem;
	background-color: whitesmoke;

	&:focus,
	&:valid {
		border-bottom: 2px solid #777;
	}
	&::placeholder {
		color: #686868;
	}
	&:placeholder-shown ~ ${Label} {
		visibility: hidden;
		opacity: 0;
		transform: translate(-2rem, -1.75rem) scale(0.7);
	}
`;
