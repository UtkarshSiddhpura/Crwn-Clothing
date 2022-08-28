import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import { ProductContainer, Img, Name, Footer } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
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
