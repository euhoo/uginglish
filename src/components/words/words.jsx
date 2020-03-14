import React, {Component} from "react"
import LeftSection from '../leftSection'
import RightSection from '../rightSection'
import './words.sass'

const Words = () => (
	<div className="section-container">
		<LeftSection className="section-left-container"/>
		<RightSection className="section-right-container"/>
	</div>
);
export default Words;
