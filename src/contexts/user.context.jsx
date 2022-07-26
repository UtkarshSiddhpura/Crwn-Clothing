import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserFromAuth } from "../utils/firebase/firebase.utils"

// In order to use context we have to export :
// 1) literal context
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// 2) Provider to wrap around <App> component
export const UserProvider = ({ children }) => {
	useEffect(() => {
		// it can be async or idk !work needed here 
		const unsubscribe = onAuthStateChangedListener((user) => {
			setCurrentUser(user);
			createUserFromAuth(user);
		});
		return unsubscribe;
	}, [])

	const [currentUser, setCurrentUser] = useState(null);
	const value = {
		currentUser,
		setCurrentUser,
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
