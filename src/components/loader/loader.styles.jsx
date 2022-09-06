import styled from "styled-components";

export const LoaderDiv = styled.div`
	--border-size: 30px;

	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-30px, -30px);

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border: var(--border-size) solid transparent;
		border-bottom-color: #808282;
	}

	&:before {
		animation: rotateB 2s infinite /* 0.5s */;
		border-bottom-color: cyan;
	}

	&:after {
		transform: rotate(90deg);
		animation: rotateA 2s infinite;
	}

	@keyframes rotateB {
		0%,
		25% {
			transform: rotate(0deg);
		}
		50%,
		75% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes rotateA {
		25%,
		50% {
			transform: rotate(270deg);
		}
		75%,
		100% {
			transform: rotate(450deg);
		}
	}
`;
