// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./auth.styles.scss";

const Auth = () => {
	// https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
	// useEffect(() => {
	// 	async function getResultAndRef() {
	// 		const res = await getRedirectResult(auth);
	// 		if (res) {
	// 			const userDocRef = createUserFromAuth(res.user);
	// 		}
	// 	}
	// 	getResultAndRef();
	// }, []);

	return (
		<div className="auth-container">
			<SignInForm />
			<SignUpForm />
			{/*not using here jst for reference*/}
{/*			<button
				onClick={signInWithGoogleRedirect}
				style={{ display: "none" }}
			>
				Sign in
			</button>
*/}		</div>
	);
};

export default Auth;
