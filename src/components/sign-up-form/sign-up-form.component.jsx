import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import FormInput from "../../components/form-input/form-input.component";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import { FormContainer } from "./sign-up-form.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const dispatch = useDispatch();

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
		dispatch(signUpStart(email, password, displayName));
		resetFormFields();
	};

	return (
		<FormContainer>
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
						placeholder: "Display Name",
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
				<FormInput
					label="Confirm Password"
					inputOptions={{
						onChange: handleChange,
						name: "confirmPassword",
						value: confirmPassword,
						required: true,
						type: "password",
						placeholder: "Confirm Password",
					}}
				/>
				<Button
					children="Sign-Up"
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					type="submit"
				/>
			</form>
		</FormContainer>
	);
};

export default SignUpForm;
