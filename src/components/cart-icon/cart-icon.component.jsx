import { CardButton, CartCount, CartSvg } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<CardButton onClick={toggleIsCartOpen}>
			<CartCount>{cartCount}</CartCount>
			<CartSvg />
		</CardButton>
	);
};

export default CartIcon;
