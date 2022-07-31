import { useNavigate } from "react-router-dom";

import {
	BackgroundImage,
	DirectoryItemBody,
	DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ directoryItem }) => {
	const { title, imageUrl, route } = directoryItem;

	const navigate = useNavigate();
	const onNavigateHandler = () => {
		navigate(route);
	};

	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<DirectoryItemBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
