import React, {useState} from "react";
import './leftSection.sass';

export default (props) => {
	const {children, className} = props;
	const [shortVisible, setShort] = useState(true);
	const shortClick = () => setShort(false);
	const fullClick = () => setShort(true);

	return (
		<div className={className}>
			{shortVisible &&<div className="left-section__drop-short" onClick={shortClick} />}
			{!shortVisible &&<div className="left-section__drop-full" onClick={fullClick} />}
		</div>
	)
}
