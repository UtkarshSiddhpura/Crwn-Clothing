import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { ProductsContainer, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
	const navigate = useNavigate();

	const goToParticularCategory = (categoryTitle) => {
		navigate(categoryTitle);
	};

	return (
		<>
			<Title
				className="title"
				onClick={() => {
					goToParticularCategory(title);
				}}
			>
				{title}
			</Title>
			<ProductsContainer>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						></ProductCard>
					))}
			</ProductsContainer>
		</>
	);
};

export default CategoryPreview;