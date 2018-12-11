import React from 'react';
import {
    Container,
    Loader,
    Overlay
} from './styles';

// Loader component used through out the project for loading
export default class extends React.Component {
	render() {
		let { hideOverlay, size } = this.props;
		size = size || "large";
		return (
			<Container>
				{!hideOverlay && <Overlay/>}
				<Loader className={size}></Loader>
            </Container>
		);
	}
}
