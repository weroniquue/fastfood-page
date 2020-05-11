import React from 'react';
import './ThankYouPage.scss';
import queryString from 'query-string';

class ThankYouPage extends React.Component {

	render() {
		console.log();
		return (
				<div className={'thank-you'}>
					<div className={"pizza-logo"}/>
					{queryString.parse(this.props.location.search).error
							? (
									<div>
										<h2>Ups! Something went wrong</h2>
										<p>Please contact with up!</p>
									</div>
							)
							: (
									<div>
										<h2>Thank you!</h2>
										<p>Wait for delivery</p>
									</div>
							)
					}
				</div>
		);
	}
}

export default ThankYouPage;
