import { takeLatest, call, all, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";
import {
	signInSuccess,
	signInFailed,
	signUpSuccess,
	signUpFailed,
	signOutSuccess,
	signOutFailed,
} from "./user.action";

import {
	getCurrentUser,
	createUserFromAuth,
	signInUserFromEmailFromAuth,
	signInWithGoogleRedirect,
	createUserFromEmailFromAuth,
	signOutUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
	try {
		const userSnaphot = yield call(
			createUserFromAuth,
			userAuth,
			additionalInfo
		);

		yield put(signInSuccess({ id: userSnaphot.id, ...userSnaphot.data() }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;

		yield call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGoogleRedirect);
		console.log(user);

		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield call(
			signInUserFromEmailFromAuth,
			email,
			password
		);

		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
		// Handling Error here just for now
		switch (error.code) {
			case "auth/wrong-password":
				alert("Incorrect Password for the entered Email!");
				break;
			case "auth/user-not-found":
				alert("No user with Entered Email exists!");
				break;
			default:
				console.log(error);
		}
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield call(
			createUserFromEmailFromAuth,
			email,
			password
		);

		yield put(signUpSuccess(user, { displayName }));
	} catch (error) {
		yield put(signUpFailed(error));
	}
}

export function* signOut() {
	try {
		yield call(signOutUser);
		yield put(signOutSuccess());
	} catch(error) {
		yield put(signOutFailed(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
	yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	]);
}
