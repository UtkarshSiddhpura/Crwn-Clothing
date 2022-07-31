import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
	display: flex;
	padding: 0 1.75rem;
	max-width: 1280px;
	margin: 2rem auto;
	justify-content: space-between;
	align-items: center;
`;

export const LogoContainer = styled(Link)`
	cursor: pointer;
	margin-right: 2rem;

	&:hover {
		filter: brightness(70%);
	}
`;
export const NavLinks = styled.div`
	min-width: 200px;
	display: flex;
	align-items: center;
`;

export const NavLink = styled(Link)`
 		display: inline-block;
 		width: max-content;
 		padding: 8px 10px;
 		border-bottom: 2px solid grey;
 		text-transform: uppercase;
 		text-decoration: none;
 		cursor: pointer;
 		color: #282828;
 		font-size: 14px;
 		font-weight: 700;
 		letter-spacing: .8px;
 		position: relative;

 		&:not(:last-child) {
 			margin-right: 22px;
 		}

 		&:hover, &:active {
 			outline: 0;
 			&::before {
 				transition: all .2s ease-in;
 				width: 100%;
 			}
 		}
 		&:focus {
 			outline: 0;
 			background-color: #22e0ff;
 		}

 		&::before {
 			content: "";
 			display: inline-block;
 			position: absolute;
 			top: 0;
 			left: 0;
 			height: 100%;
 			background-color: cyan;
 			width: 0px;
 			z-index: -1;
 		}
 	}
`;