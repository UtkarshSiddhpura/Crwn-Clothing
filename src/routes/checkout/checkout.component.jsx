import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useSelector } from "react-redux";
import {
	selectCartTotal,
	selectCartItems,
} from "../../store/cart/cart.selector";

import "./checkout.styles.scss";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">product</div>
				<div className="header-block">Name</div>
				<div className="header-block">Price</div>
				<div className="header-block">Quantity</div>
				<div className="header-block">Remove</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
			))}
			<div className="total">Total: ${cartTotal}</div>
		</div>
	);
};

export default Checkout;
