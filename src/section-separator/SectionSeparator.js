import React from 'react';
import './SectionSeparator.scss';

class SectionSeparator extends React.Component {

	render() {
		return (
					<div className={`section-separator ${this.props.topSeparator ? 'top' : 'bottom'}`}/>
		);
	}
}

export default SectionSeparator;
