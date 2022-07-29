import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ( {categoriesList} ) => {
	return (
		<div className="directory-container">
			{categoriesList.map((item) => (
				<DirectoryItem key={item.id} directoryItem={item} />
			))}
		</div>
	);
}

export default Directory;