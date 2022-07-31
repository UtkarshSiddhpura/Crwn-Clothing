import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
	NavContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<>
			<NavContainer>
				<LogoContainer to="/">
						<CrwnLogo title="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">
						Shop
					</NavLink>
					{currentUser ? (
						<NavLink
							as="span"
							onClick={signOutHandler}
						>
							sign-out
						</NavLink>
					) : (
						<NavLink to="/auth">
							sign-in
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
