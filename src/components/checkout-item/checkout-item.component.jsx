import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
	addItemToCart,
	removeQuantityOfItem,
	deleteItemFromCart,
} from "../../store/cart/cart.action";

import {
	ItemContainer,
	ImageContainer,
	RemoveItem,
	Text,
	Quantity,
} from "./checkout-item.styles";

const CheckoutItem = ({ checkoutItem }) => {
	const { name, imageUrl, price, quantity } = checkoutItem;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const removeQuantity = () =>
		dispatch(removeQuantityOfItem(cartItems, checkoutItem));
	const addItem = () => dispatch(addItemToCart(cartItems, checkoutItem));
	const deleteItem = () =>
		dispatch(deleteItemFromCart(cartItems, checkoutItem));

	return (
		<ItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<Text> {name}</Text>
			<Text> ${price}</Text>
			<Quantity>
				<span onClick={removeQuantity}>&larr;</span>
				{quantity}
				<span onClick={addItem}>&rarr;</span>
			</Quantity>
			<RemoveItem onClick={deleteItem}>&#10005;</RemoveItem>
		</ItemContainer>
	);
};

export default CheckoutItem;
