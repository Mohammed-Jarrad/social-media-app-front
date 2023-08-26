import React from "react";

const Item = ({ image, children }) => {
	return (
		<div className="item">
			<img src={image} alt="" />
			<span>{children}</span>
		</div>
	);
};

export default Item;
