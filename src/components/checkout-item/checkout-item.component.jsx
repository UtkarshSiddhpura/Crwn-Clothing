import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
	const { name, imageUrl, price, quantity } = checkoutItem;
	const { addItemToCart, removeQuantityOfItem, deleteItemFromCart } =
		useContext(CartContext);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="price">${price}</span>
			<div className="quantity">
				<span
					className="arrow"
					onClick={() => removeQuantityOfItem(checkoutItem)}
				>
					&larr;
				</span>
				{quantity}
				<span
					className="arrow"
					onClick={() => addItemToCart(checkoutItem)}
				>
					&rarr;
				</span>
			</div>
			<span
				className="remove-button"
				onClick={() => deleteItemFromCart(checkoutItem)}
			>
				&#10005;
			</span>
		</div>
	);
};

export default CheckoutItem;
