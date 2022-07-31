import styled from "styled-components";

export const ItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
		width: 20%;
		margin-right: 25px;

		img {
			width: 100%;
			max-height: 290px;
			border-radius: 4px;
		}
`;

export const RemoveItem = styled.span`
		padding-left: 12px;
		user-select: none;
		cursor: pointer;
		&:hover {
			color: #777;
		}
`;

export const Text = styled.span`
		width: 23%;
`;

export const Quantity = styled(Text)`
		display: flex;
		width: 23%;

		span {
			cursor: pointer;
			user-select: none;
		}
`;