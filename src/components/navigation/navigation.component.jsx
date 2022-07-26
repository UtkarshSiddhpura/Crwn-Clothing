import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<>
			<div className="navigation">
				<div className="navigation-logo">
					<Link to="/">
						<CrwnLogo title="logo" />
					</Link>
				</div>
				<div className="navigation-links">
					<Link className="navigation-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<span
							onClick={signOutHandler}
							className="navigation-link"
						>
							sign-out
						</span>
					) : (
						<Link className="navigation-link" to="/auth">
							sign-in
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
