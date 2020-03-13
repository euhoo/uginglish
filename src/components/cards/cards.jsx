import React from "react";
import './cards.sass';
import Card from "../card";

export default () => (
	<>

		<div className="row cards-container">

			<div className="col-12">
				<div className="row cards-content">
					<div className="col-2">

						<Card text="боковое меню с текущими словами или прогессом"></Card>
					</div>
					<div className="col-2">

					</div>
					<div className="col-6">
						<Card text="слово"> здесь будет инпут</Card>
					</div>
					<div className="col-2">

					</div>
				</div>
			</div>
		</div>
	</>
)
