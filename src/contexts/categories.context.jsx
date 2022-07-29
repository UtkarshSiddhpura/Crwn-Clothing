import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
	categories: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState({});
	const value = {
		categories,
	};

	useEffect(() => {
		const getCategories = async () => {
			const categoriesData = await getCategoriesAndDocuments();
			setCategories(categoriesData);
		}
		getCategories();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
