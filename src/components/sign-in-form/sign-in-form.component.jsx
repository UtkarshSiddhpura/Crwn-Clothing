import { useState } from "react";
import {
	signInUserFromEmailFromAuth,
	signInWithGooglePopup,
	createUserFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { FcGoogle } from "react-icons/fc";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const signInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		await createUserFromAuth(response.user);
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// returns response => userCred
			await signInUserFromEmailFromAuth(email, password);
			resetFormFields();

		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("Incorrect Password for the Email");
					break;
				case "auth/user-not-found":
					alert("no user with email exists")
					break;
				default: 
					console.log(err);
			}
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account..</h2>
			<span>Sign in using Email & Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					inputOptions={{
						onChange: handleChange,
						name: "email",
						value: email,
						required: true,
						type: "email",
						autoComplete: "off",
						placeholder: "Email",
					}}
				/>
				<FormInput
					label="Password"
					inputOptions={{
						onChange: handleChange,
						name: "password",
						value: password,
						required: true,
						type: "password",
						placeholder: "Password",
					}}
				/>
				<div className="button-group">
					<Button
						children="Sign-in"
						buttonType="button-light"
						type="submit"
					/>

					<Button
						children= "Sign in with Google"
						icon={<FcGoogle/>}
						buttonType="button-primary"
						type="button"
						onClick={signInWithGoogle}
					/>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
