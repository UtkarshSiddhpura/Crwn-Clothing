import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(sum, cartItem) => sum + cartItem.quantity * cartItem.price,
		0
	)
);
