import styled from "styled-components";

export const ProductsContainer = styled.div`
	margin: 0 auto 4.5rem auto;
	padding: 0 2vw;
	max-width: 1150px;
	display: grid;
	grid-gap: 1.6rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Title = styled.h2`
	max-width: 1125px;
	margin: 0 auto 1rem auto;
	padding: 0 1rem;
	color: #777;
	text-transform: uppercase;
	text-decoration: underline;
	cursor: pointer;
`;