import { CardButton, CartCount, CartSvg } from "./cart-icon.styles";

import { useSelector, useDispatch } from "react-redux";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CardButton onClick={toggleIsCartOpen}>
			<CartCount>{cartCount}</CartCount>
			<CartSvg />
		</CardButton>
	);
};

export default CartIcon;
