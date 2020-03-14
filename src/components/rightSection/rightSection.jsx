import React from "react";
import './rightSection.sass';
import Card from "../card";

export default (props) => {
	const {children, className} = props;
	return (
		<div className={className}>
			<div className="card-container-left">
				<Card text="слово"> здесь будет инпут</Card>
			</div>
			<div className="card-container-right">
				<Card text="слово"> здесь будет инпут</Card>
			</div>
		</div>
	)
}
