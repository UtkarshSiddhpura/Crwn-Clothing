import { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart} from "../../store/user/user.action";

import FormInput from "../../components/form-input/form-input.component";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
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
	const dispatch = useDispatch();

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

	const signInWithGoogle = () => {
		dispatch(googleSignInStart());
	};

	const handleSubmitEmailAndPass = (e) => {
		e.preventDefault();
		dispatch(emailSignInStart(email, password));
		resetFormFields();
	};

	return (
		<FormContainer>
			<h2>Already have an account..</h2>
			<span>Sign in using Email & Password</span>
			<form onSubmit={handleSubmitEmailAndPass}>
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
						children="Sign in with Google"
						icon={<FcGoogle />}
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
