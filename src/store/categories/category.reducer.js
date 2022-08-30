import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
	categories: [],
	isLoading: true,
	error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_START:
			return {
				...state,
				isLoading: true,
			};
		case CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_SUCCESS:
			return {
				...state,
				categories: payload,
				isLoading: false,
			};
		case CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
