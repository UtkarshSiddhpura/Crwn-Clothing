import styled from "styled-components";

export const IconContainer = styled.div`
	position: absolute;
	font-size: 2vw;
	left: 12px;
	top: 14px;
`;

export const BaseButton = styled.button`
	--color-dark: #282828;
	--color-light: white;
	--border-dark: 2px solid var(--color-dark);
	--border-transparent: 2px solid transparent;

	cursor: pointer;
	border: none;
	padding: 0.9rem 1.5em;
	font-size: 1.45vw;
	font-family: inherit;
	border-radius: 4px;
	backface-visibility: hidden;
	position: relative;
	transition: all 0.2s;

	color: var(--color-dark);
	background-color: var(--color-light);
	border: var(--border-dark);

	&:active {
		transform: scale(0.95);
	}
	&:hover {
		color: white;
		background-color: var(--color-dark);
	}

	${({icon}) => (icon && `
		padding: 1rem 1.3em 1rem 2.6em;
	`)}

	@media screen and (max-width: 1050px) {
		font-size: 16px;
		${IconContainer} {
			font-size: 20px;
		}
	}
`;

export const InvertedButton = styled(BaseButton)`
	color: #fff;
	background-color: var(--color-dark);
	border: var(--border-transparent);

	&:hover {
		color: var(--color-dark);
		background-color: var(--color-light);
		border: var(--border-dark);
	}
`;

export const PrimaryButton = styled(BaseButton)`
	background-color: #1da1f2d6;
	color: white;
	border: var(--border-transparent);

	&:hover {
		background-color: #002f46;
	}
`;