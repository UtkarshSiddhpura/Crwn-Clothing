import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
	ItemContainer,
	ImageContainer,
	RemoveItem,
	Text,
	Quantity,
} from "./checkout-item.styles";

const CheckoutItem = ({ checkoutItem }) => {
	const { name, imageUrl, price, quantity } = checkoutItem;
	const { addItemToCart, removeQuantityOfItem, deleteItemFromCart } =
		useContext(CartContext);

	return (
		<ItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<Text> {name}</Text>
			<Text> ${price}</Text>
			<Quantity>
				<span onClick={() => removeQuantityOfItem(checkoutItem)}>
					&larr;
				</span>
				{quantity}
				<span onClick={() => addItemToCart(checkoutItem)}>&rarr;</span>
			</Quantity>
			<RemoveItem onClick={() => deleteItemFromCart(checkoutItem)}>
				&#10005;
			</RemoveItem>
		</ItemContainer>
	);
};

export default CheckoutItem;
