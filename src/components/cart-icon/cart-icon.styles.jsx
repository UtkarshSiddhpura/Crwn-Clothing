import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const CartSvg = styled(FaShoppingCart)`
	height: 1.5rem;
	width: 1.5rem;
`;

export const CardButton = styled.button`
	display: inline-block;
	cursor: pointer;
	padding: 2px 4px;
	position: relative;
	outline: none;
	background-color: transparent;
	border: none;
	border-radius: 5px;
	color: #777;

	&:focus {
		color: #000;
		border: 1px solid #777;
	}
`;

export const CartCount = styled.span`
	color: #000;
	width: 24px;
	height: 24px;
	padding: 3px 1px 0 0;
	position: absolute;
	left: 65%;
	top: -45%;
	background-color: cyan;
	border-radius: 50%;
`;
