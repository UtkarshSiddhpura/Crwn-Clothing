import { FaShoppingCart } from "react-icons/fa";
import "./cart-icon.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<button
			className="cart"
			onClick={toggleIsCartOpen}
			cart-size={cartCount}
		>
			<FaShoppingCart />
		</button>
	);
};

export default CartIcon;
