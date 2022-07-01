import "./categories-directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesDirectory = ( {categoriesList} ) => {
	return (
		<div className="categories-container">
			{categoriesList.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
}

export default CategoriesDirectory;