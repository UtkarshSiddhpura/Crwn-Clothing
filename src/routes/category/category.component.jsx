import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
	const { categories } = useContext(CategoriesContext);
	const { category } = useParams();
	const [products, setProducts] = useState(categories[category]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [categories, category]);

	return (
		<>
			<h2 className="category-title">{category}</h2>
			<div className="category">
				{products &&
					products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						></ProductCard>
					))}
			</div>
		</>
	);
};

export default Category;