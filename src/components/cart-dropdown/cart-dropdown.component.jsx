import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartDropdownContainer, ItemsContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const navigateToCheckout = async () => {
		navigate("/checkout");
		dispatch(setIsCartOpen(false));
	};

	return (
		<CartDropdownContainer>
			<ItemsContainer>
				{cartItems.length === 0 ? (
					<span>Your Cart is Empty &#33;</span>
				) : (
					cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))
				)}
			</ItemsContainer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.primary}
				children="Go To Checkout"
				onClick={navigateToCheckout}
			/>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
