import { createContext, useReducer, useEffect } from "react";
import {
	onAuthStateChangedListener,
	createUserFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				currentUser: payload,
			};
		default:
			throw new Error("Unhandled userReducer:" + type);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;

	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			setCurrentUser(user);
			createUserFromAuth(user);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		setCurrentUser,
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
