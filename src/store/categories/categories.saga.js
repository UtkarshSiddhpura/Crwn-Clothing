import { all, call, put, takeLatest } from "redux-saga/effects";

import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
} from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(
			getCategoriesAndDocuments,
			"categories"
		);
		yield put(fetchCategoriesSuccess(categoriesArray));
	} catch (e) {
		yield put(fetchCategoriesFailed(e));
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH_START,
		fetchCategoriesAsync
	);
}

// categories Saga aggregator
export function* categoriesSaga() {
	// Listening to onFetchCategories generator
	yield all([call(onFetchCategories)]);
}
