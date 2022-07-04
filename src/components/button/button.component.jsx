import './button.styles.scss'

const Button = ({ children, buttonType, icon, ...otherProps }) => {
	return(
		<button className={`${buttonType} ${icon?"button-icon-pad":''} button`} {...otherProps} >
			{icon &&
				<div className="button-icon-container">{icon}</div>
			}
			{children}
		</button>
	);
}

export default Button;