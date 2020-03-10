import React, {Component} from "react";
import './card.css';

export default class Card extends Component {
	render() {
		const {children, text} = this.props;
		return (
			<div className="card card-container">
				<div className="card-body cards-container__body">
					<p className="card-text text-center cards-container__text">
						{text}
					</p>
					<div className="cards-container__input">
						{children}

					</div>
				</div>
			</div>
		)
	}
}
