import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Loader from "../../components/loader/loader.component";

import "./category.styles.scss";

const Category = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	const { category } = useParams();
	const products = categoriesMap[category];

	return isLoading ? (
		<Loader />
	) : (
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
