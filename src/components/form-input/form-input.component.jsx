import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className="form-group">
			<input className="form-input" {...inputOptions} />
			{label && (
				<label
					className="form-input-label"
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
