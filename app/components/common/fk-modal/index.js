import React from 'react';
import Modal from 'react-modal';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({
			title: '',
			isModalOpen: false,
			containerClass: '',
			additionalConfig: {}
		}, props.config);
	}
	componentWillReceiveProps(props) {
		this.setState(Object.assign({...this.state}, props.config));
	}
	render() {
		let {
			title,
			isModalOpen,
			additionalConfig,
			containerClass
		} = this.state;
		return (
			<Modal isOpen={isModalOpen}
				style={{
					overlay: {},
					content: {}
				}}
				ariaHideApp={false}
				{...additionalConfig}>
				<div className={"modal-container " + containerClass}>
					<div className="modal-header">
						<span>{title}</span>
						<i className='icon icon-cross' onClick={this.props.closeModal.bind(this, null)}></i>
					</div>
					<div className="modal-content">
						{this.props.children}
					</div>
				</div>
			</Modal>
		);
	}
}
