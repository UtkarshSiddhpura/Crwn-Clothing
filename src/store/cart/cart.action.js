import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, removeQuantity, deleteCartItem } from "./cart.utils";

const setCartItems = (cartItems) => ({
	type: CART_ACTION_TYPES.SET_CART_ITEMS,
	payload: cartItems,
});

export const setIsCartOpen = (bool) => ({
	type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
	payload: bool,
});

export const addItemToCart = (cartItems, itemToAdd) => {
	const newCartItems = addCartItem(cartItems, itemToAdd);
	return setCartItems(newCartItems);
};

export const removeQuantityOfItem = (cartItems, itemToDecrement) => {
	const newCartItems = removeQuantity(cartItems, itemToDecrement);
	return setCartItems(newCartItems);
};

export const deleteItemFromCart = (cartItems, itemToDelete) => {
	const newCartItems = deleteCartItem(cartItems, itemToDelete);
	return setCartItems(newCartItems);
};
