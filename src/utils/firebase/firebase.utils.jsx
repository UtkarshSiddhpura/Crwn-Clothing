// This file is (interface Layer) Exposing firebase functions to other modules.
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	// sendEmailVerification,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCAJYApU-BKznUWyh0U-uVyEq50NhvMDhc",
	authDomain: "crwn-clothing-db-702e4.firebaseapp.com",
	projectId: "crwn-clothing-db-702e4",
	storageBucket: "crwn-clothing-db-702e4.appspot.com",
	messagingSenderId: "829390836994",
	appId: "1:829390836994:web:6290d16805bb84f28f1e1b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);
	objectsToAdd.forEach(object => {
		const objectRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(objectRef, object);
	});

	await batch.commit(); console.log("data added succesfully");
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);

	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { items, title } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
	return categoryMap;
}

export const createUserFromAuth = async (userAuth, additionalInfo = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		try {
			const { displayName, email } = userAuth;
			const createdAt = new Date();

			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (e) {
			console.log("There is some err with setting user err: " + e.code);
		}
	}

	return userDocRef;
};

export const createUserFromEmailFromAuth = async (email, password) => {
	if (!email || !password) return;

	const response = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	// Sending verfication code functionality Here jst for reference
	// if (response) {
	// 	try {
	// 		await sendEmailVerification(auth.currentUser);
	// 		alert("Email verification link Succesfully Sent to given email (check your Inbox & Spam, click on it to verify)");
	// 	} catch(e) {
	// 		if(e.code) alert("Problem with sending email verification link TRY AGAIN or SIGN-IN with Google");
	// 	}
	// }
	return response;
};

export const signInUserFromEmailFromAuth = async (email, password) => {
	if (!email || !password) return;

	const response = await signInWithEmailAndPassword(auth, email, password);

	return response;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	// below func. return a "unsubscribe" func. when invoked it'll stop Listening to authChanged
	onAuthStateChanged(auth, callback);
