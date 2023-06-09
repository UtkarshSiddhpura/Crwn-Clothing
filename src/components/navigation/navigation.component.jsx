import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutStart } from "../../store/user/user.action";

import {
	NavContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles";

const Navigation = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutHandler = () => {
		dispatch(signOutStart());
	};

	return (
		<>
			<NavContainer>
				<LogoContainer to="/">
					<CrwnLogo title="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutHandler}>
							sign-out
						</NavLink>
					) : (
						<NavLink to="/auth">sign-in</NavLink>
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
