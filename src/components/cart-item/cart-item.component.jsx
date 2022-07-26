import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<div className="item-container">
			<img className="item-img" src={imageUrl} alt={name} />
			<h3 className="item-name">{name}</h3>
			<span className="item-price">${price} &times; {quantity}</span>
		</div>
	);
};

export default CartItem;
