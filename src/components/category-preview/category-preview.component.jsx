import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
	const navigate = useNavigate();

	const goToParticularCategory = (categoryTitle) => {
		navigate(categoryTitle);
	};

	return (
		<>
			<h2
				className="title"
				onClick={() => {
					goToParticularCategory(title);
				}}
			>
				{title}
			</h2>
			<div className="products-container">
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						></ProductCard>
					))}
			</div>
		</>
	);
};

export default CategoryPreview;