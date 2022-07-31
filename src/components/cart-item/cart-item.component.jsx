import {
	ItemContainer,
	ItemImg,
	ItemName,
	ItemPrice,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<ItemContainer>
			<ItemImg src={imageUrl} alt={name} />
			<div>
				<ItemName>{name}</ItemName>
				<ItemPrice as="span">
					${price} &times; {quantity}
				</ItemPrice>
			</div>
		</ItemContainer>
	);
};

export default CartItem;
