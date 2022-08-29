import { useSelector } from "react-redux";
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Loader from "../../components/loader/loader.component";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return isLoading ? (
		<Loader />
	) : (
		<>
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
		</>
	);
};

export default CategoriesPreview;
