import { Group, Input, Label } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
	return (
		<Group>
			<Input {...inputOptions} />
			{label && <Label>{label}</Label>}
		</Group>
	);
};

export default FormInput;