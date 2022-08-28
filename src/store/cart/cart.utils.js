export const addCartItem = (cartItems, itemToAdd) => {
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

export const removeQuantity = (cartItems, itemToDecrement) => {
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

export const deleteCartItem = (cartItems, itemToDelete) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};
