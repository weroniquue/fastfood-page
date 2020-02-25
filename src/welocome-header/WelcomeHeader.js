import React from 'react';
import './WelcomeHeader.scss'
import Menu from "../menu/Menu";
import SectionSeparator from "../section-separator/SectionSeparator";

class WelcomeHeader extends React.Component {
	render() {
		return (
				<div className={'burgers-background'}>
					<Menu/>
					<h1>Party Time</h1>
					<div className={'promotion-info'}>
						<div>Buy any 2 burgers and get 1.5L Pepsi Free</div>
					</div>
					<button className={'order-button'}>Order now</button>
					<SectionSeparator topSeparator={true}/>
				</div>
		);
	}
}

export default WelcomeHeader;
