import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
	const { categories } = useContext(CategoriesContext);

	return (
		<div className="categories">
			{Object.keys(categories).map((title, idx) => {
				const products = categories[title];
				return (
					<CategoryPreview
						key={idx + 501}
						title={title}
						products={products}
					/>
				);
			})}
		</div>
	);
};

export default CategoriesPreview;
