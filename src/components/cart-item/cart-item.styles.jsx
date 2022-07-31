import styled from "styled-components";

export const ItemContainer = styled.div`
	margin-bottom: 1rem;
	position: relative;
	display: flex;
`;

export const ItemImg = styled.img`
	display: inline-block;
	width: 50px;
	height: 55px;
	border: 2px solid #777;
	border-radius: 4px;
`;

export const ItemName = styled.h3`
	padding: 0 8px;
	font-weight: normal;
	margin-bottom: 4px;
`;

export const ItemPrice = styled(ItemName)`
	bottom: 10px;
`;
