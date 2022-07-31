import styled from "styled-components";

export const ProductContainer = styled.div`
	position: relative;
	overflow: hidden;
	padding: 0.3rem;
	border-radius: 4px;
	box-shadow: 0 0 0.4rem 0.1rem rgba(0, 0, 0, 0.2);
	transition: all 0.2s;

	&::after {
		content: "";
		position: absolute;
		inset: 0;
	}

	button {
		position: absolute;
		top: 65%;
		left: 5%;
		width: 90%;
		z-index: 100;
		opacity: 0.9;
	}

	@media (hover: hover) {
		button {
			visibility: hidden;
			opacity: 0;
		}

		&:hover {
			transform: translateY(-5px);
			&::after {
				background-color: rgba(255, 255, 255, 0.2);
			}
			button {
				visibility: visible;
				opacity: 1;
			}
		}
	}
`;

export const Img = styled.img`
	border-radius: 4px;
	width: 100%;
	aspect-ratio: 3.3/4;
`;

export const Footer = styled.div`
	width: 100%;
	margin-top: 0.4rem;
	align-self: flex-start;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Name = styled.h2`
	font-size: 1.4rem;
	color: #282828;
`;
