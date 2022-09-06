import {
	BaseButton,
	InvertedButton,
	PrimaryButton,
	IconContainer,
	ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	inverted: "inverted",
	primary: "primary",
};

const getButton = (buttonType) => {
	return ({
		base: BaseButton,
		inverted: InvertedButton,
		primary: PrimaryButton,
	}[buttonType]);
};

// https://stackoverflow.com/questions/48502647/conditional-rendering-in-styled-components
const Button = ({ children, buttonType, isLoading, icon, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps} icon={icon}>
			{icon && <IconContainer>{icon}</IconContainer>}
			{isLoading ? <ButtonSpinner/> : children}
		</CustomButton>
	);
};

export default Button;
