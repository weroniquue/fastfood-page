import React from 'react';
import './IconTile.scss'

class IconTile extends React.Component {
	render() {
		return (
				<div className={'food-tile'}>
					<img src={this.props.imageUrl} className={'icon'}/>
					<p className={'tile-description'}>{this.props.text}</p>
				</div>
		);
	}
}

export default IconTile;
