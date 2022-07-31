import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ProductContainer, Img, Name, Footer } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};

	return (
		<ProductContainer>
			<Img src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<p>${price}</p>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</Button>
		</ProductContainer>
	);
};

export default ProductCard;
