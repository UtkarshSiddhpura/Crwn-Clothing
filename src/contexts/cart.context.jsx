import { createContext, useReducer } from "react";

const addCartItem = (cartItems, itemToAdd) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === itemToAdd.id
	);

	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeQuantity = (cartItems, itemToDecrement) => {
	if (itemToDecrement.quantity <= 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== itemToDecrement.id
		);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === itemToDecrement.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const deleteCartItem = (cartItems, itemToDelete) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeQuantity: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			}
		default:
			throw new Error("Unhandled type in cartReducer");
	}
};

export const CartProvider = ({ children }) => {
	const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const setIsCartOpen = (bool) => {
		dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN , payload: bool });
	};

	const updateCartItemReducer = (newCartItems) => {
		const cartItems = newCartItems;
		const cartCount = cartItems.reduce(
			(sum, cartItem) => sum + cartItem.quantity,
			0
		);
		const cartTotal = cartItems.reduce(
			(sum, cartItem) => sum + cartItem.quantity * cartItem.price,
			0
		);
		const payload = {
			cartItems,
			cartCount,
			cartTotal,
		};
		dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload });
	};

	const addItemToCart = (itemToAdd) => {
		updateCartItemReducer(addCartItem(cartItems, itemToAdd));
	};

	const removeQuantityOfItem = (itemToDecrement) => {
		updateCartItemReducer(removeQuantity(cartItems, itemToDecrement));
	};

	const deleteItemFromCart = (itemToDelete) => {
		updateCartItemReducer(deleteCartItem(cartItems, itemToDelete));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeQuantityOfItem,
		deleteItemFromCart,
		cartCount,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
