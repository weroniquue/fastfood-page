import React from 'react';
import './WelcomeHeader.scss'

class WelcomeHeader extends React.Component {
	render() {
		return (
				<div className={'burgers-background'}>
					<div className={'header-info'}>
						<div className={'left-arrow'}/>
						<div className={'promotion'}>
							<h1>Party Time!</h1>
							<div className={'promotion-info'}>
								<div className={'promotion-details'}>
									Buy any 2 burgers and get 1.5L Pepsi Free
								</div>
							</div>
							<button className={'order-button'}>Order now</button>
						</div>
						<div className={'right-arrow'}/>
					</div>
					<div className={'double-arrow'}/>
				</div>
		);
	}
}

export default WelcomeHeader;
