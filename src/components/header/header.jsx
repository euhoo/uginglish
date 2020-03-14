import React from "react";
import './header.sass';

export default (props) => {
	const {children, className} = props;
	return (
		<div className={className}>
			{children}
		</div>
	)
}
