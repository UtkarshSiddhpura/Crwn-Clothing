import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems, setIsCartOpen} = useContext(CartContext);
	const navigate = useNavigate();

	const navigateToCheckout = async () => {
		navigate("/checkout");
		setIsCartOpen(false);
	};

	return (
		<div className="cart-dropdown">
			<div className="items-container">
				{cartItems.length === 0 ? (
					<span>Your Cart is Empty &#33;</span>
				) : (
					cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))
				)}
			</div>
			<Button
				buttonType="button-dark"
				children="Go To Checkout"
				onClick={navigateToCheckout}
			/>
		</div>
	);
};

export default CartDropdown;
