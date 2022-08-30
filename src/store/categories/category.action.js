import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () => ({
	type: CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
	type: CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_SUCCESS,
	payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
	type: CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_ERROR,
	payload: error,
});
