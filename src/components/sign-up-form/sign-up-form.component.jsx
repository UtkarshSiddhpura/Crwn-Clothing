import { useState } from "react";
import {
	createUserFromAuth,
	createUserFromEmailFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import "./sign-up-in-form.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

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
		if (password !== confirmPassword) {
			alert("Password don't match");
			return;
		}

		try {
			const { user } = await createUserFromEmailFromAuth(email, password);
			// return the userDocumentReference
			// can be also moved to a centralized place -> /contexts/user.context
			// bt we need displayName for creating user so kept here
			await createUserFromAuth(user, {
				displayName,
			});

			resetFormFields();
		} catch (e) {
			if (e.code) alert("Error in creating user: " + e.code);
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up using Email & Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOptions={{
						autoFocus: true,
						onChange: handleChange,
						name: "displayName",
						value: displayName,
						required: true,
						type: "text",
						placeholder: "Display Name"
					}}
				/>
				<FormInput
					label="Email"
					inputOptions={{
						onChange: handleChange,
						name: "email",
						value: email,
						required: true,
						type: "email",
						autoComplete: "off",
						placeholder: "Email"
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
						placeholder: "Password"
					}}
				/>
				<FormInput
					label="Confirm Password"
					inputOptions={{
						onChange: handleChange,
						name: "confirmPassword",
						value: confirmPassword,
						required: true,
						type: "password",
						placeholder: "Confirm Password"
					}}
				/>
				<Button children="Sign-Up" buttonType="button-dark" type="submit" />
			</form>
		</div>
	);
};

export default SignUpForm;
