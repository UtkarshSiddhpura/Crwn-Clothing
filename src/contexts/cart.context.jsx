import { createContext, useState, useEffect } from "react";

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

const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeQuantity: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		setCartCount(
			cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
		);
	}, [cartItems]);

	useEffect(() => {
		setCartTotal(
			cartItems.reduce((sum, cartItem) => sum + cartItem.quantity*cartItem.price, 0)
		);
	}, [cartItems]);

	const addItemToCart = (itemToAdd) => {
		setCartItems(addCartItem(cartItems, itemToAdd));
	};

	const removeQuantityOfItem = (itemToDecrement) => {
		setCartItems(removeQuantity(cartItems, itemToDecrement));
	};

	const deleteItemFromCart = (itemToDelete) => {
		setCartItems(deleteCartItem(cartItems, itemToDelete));
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

export { CartContext, CartProvider };
