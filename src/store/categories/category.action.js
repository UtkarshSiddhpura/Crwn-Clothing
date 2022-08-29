import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FETCH_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FETCH_SUCCESS,
	payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FETCH_ERROR,
	payload: error,
});

export const fetchCategoriesAsync = async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCategoriesAndDocuments();
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (e) {
		dispatch(fetchCategoriesFailed(e));
	}
};
