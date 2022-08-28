import { useSelector } from "react-redux";
import { selectCategoriesMap } from '../../store/categories/category.selector'

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<div className="categories">
			{Object.keys(categoriesMap).map((title, idx) => {
				const products = categoriesMap[title];
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
