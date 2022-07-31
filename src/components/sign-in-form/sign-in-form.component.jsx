import { useState } from "react";
import {
	signInUserFromEmailFromAuth,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import { FcGoogle } from "react-icons/fc";

import { Group } from "./sign-in-form.styles";
import { FormContainer } from "../sign-up-form/sign-up-form.styles";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
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

	const signInWithGoogle = async () => {
		const {user} = await signInWithGooglePopup();
	};
	
	// Handle Signing-in for user email password
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// returns response obj => response.user is UserCredential
			await signInUserFromEmailFromAuth(email, password);
			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("Incorrect Password for the entered Email!");
					break;
				case "auth/user-not-found":
					alert("No user with Entered Email exists!")
					break;
				default: 
					console.log(err);
			}
		}
	};

	return (
		<FormContainer>
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
				<Group>
					<Button
						children="Sign-in"
						buttonType={BUTTON_TYPE_CLASSES.base}
						type="submit"
					/>

					<Button
						children= "Sign in with Google"
						icon={<FcGoogle/>}
						buttonType={BUTTON_TYPE_CLASSES.primary}
						type="button"
						onClick={signInWithGoogle}
					/>
				</Group>
			</form>
		</FormContainer>
	);
};

export default SignInForm;