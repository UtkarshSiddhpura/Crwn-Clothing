import styled from "styled-components";

export const CartDropdownContainer = styled.div`
	position: absolute;
	right: 25px;
	top: 80px;
	border: 2px solid #000;
	border-radius: 4px;
	height: 32rem;
	width: 21rem;
	padding: 1rem;
	z-index: 200;
	background-color: rgba(255, 255, 255, .9);

	& button {
		position: absolute;
		bottom: 1rem;
		width: 90%;
	}
`;

export const ItemsContainer = styled.div`
	height: 88%;
	overflow-y: auto;
	border-bottom: 2px solid #777;
`;