import React from 'react';
import './DeliverySection.scss';
import SectionSeparator from "../section-separator/SectionSeparator";

class DeliverySection extends React.Component {
	render() {
		return (
				<section className={'deliver-section'}>
					<SectionSeparator/>
					<div className={'delivery-info'}>
						<img src={'/man.png'} className={'pizza-maker'}/>
						<div className={'delivery-details'}>
							<h2>We Guarantee 30 Minutes Delivery</h2>
							<p>If you’re having a meeting, working late at night and need an extra push. Let us know and we will be
								there</p>
						</div>
					</div>
				</section>
		);
	}
}

export default DeliverySection;
