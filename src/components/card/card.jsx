import React, {useEffect} from "react";
import './card.sass';
import reqApi from '../../factories/requests';

export default (props) => {
	const {children, text} = props;
	useEffect(() => {
		reqApi.getTodayWords().then(data => {
			console.log(data)
		});
	});
	return (
		<div className="card-container">
			<div className="card-container__word text-center">
				<p className="card-container__text">
					Оченьдлинноепредлинноеслово
				</p>
			</div>
			<div className="card-container__input text-center">
				<input type="text" placeholder="введи перевод"/>
			</div>
		</div>
	)
}
