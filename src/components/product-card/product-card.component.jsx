import "./product-card.styles.scss";
import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};

	return (
		<div className="product-container">
			<img className="product-img" src={imageUrl} alt={name} />
			<div className="product-footer">
				<h2 className="product-name">{name}</h2>
				<p className="product-price">${price}</p>
			</div>
			<Button
				buttonType="button-dark"
				onClick={addProductToCart}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;
