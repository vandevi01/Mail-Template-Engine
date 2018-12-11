import React from 'react';
import Loader from '../common/loader';
import {connect} from "react-redux";
import {PreviewBox} from './preview-box';
import SendMailForm from './send-mail-form';
import axios from "axios";
import {toastr} from 'react-redux-toastr';
import {ActionContainer, Heading, TagList, AppButton} from './styles';
import FKModal from '../common/fk-modal';
import {Link} from 'react-router-dom';

class TemplateDetails extends React.Component {
    constructor(props) {
        super(props);
        const matchParams = this.props.match.params;
        this.state = {
            templateName: matchParams.templateId,
            template: JSON.parse(localStorage.getItem("templates"))[matchParams.templateId]
        };
    }
    render() {
        let {
            showPreview,
            showUserInfoBox,
            template,
            templateName
        } = this.state;
        const {
            mergeTagsFetching,
            mergeTags,
            mergeTagsMap
        } = this.props;
        return (
            <React.Fragment>
                {mergeTagsFetching && <Loader />}
                <Heading>
                    <Link to={"/"}>Templates</Link> > {templateName}
                </Heading>
                {template}
                <FKModal closeModal={this.closePreviewModal}
                         config={{
                             isModalOpen: showPreview,
                             title: "Preview"
                         }}>
                    <PreviewBox template={template}
                                templateData={mergeTagsMap}></PreviewBox>
                </FKModal>
                <FKModal closeModal={this.closeSendMailModal}
                         config={{
                             isModalOpen: showUserInfoBox,
                             title: "Preview"
                         }}>
                    <SendMailForm onSubmit={this.sendMail}/>
                </FKModal>
                <TagList>
                    <div className="row">
                        <div>Name</div>
                        <div>Value</div>
                    </div>
                    {mergeTags && mergeTags.map(({name, value}, index) => (
                        <div key={index} className="row">
                            <div>{name}</div>
                            <div>{value}</div>
                        </div>
                    ))}
                </TagList>
                <ActionContainer>
                    <AppButton className="medium filled"
                               onClick={this.openPreview}>Preview</AppButton>
                    <AppButton className="medium filled"
                               onClick={this.openUserInfoBox}>Send Mail</AppButton>
                </ActionContainer>
            </React.Fragment>
        );
    }
    closePreviewModal = () => {
        this.setState({
            showPreview: false
        });
    };
    openPreview = () => {
        this.setState({
            showPreview: true
        });
    };
    openUserInfoBox = () => {
        this.setState({
            showUserInfoBox: true
        });
    };
    closeSendMailModal = () => {
        this.setState({
            showUserInfoBox: false
        });
    };
    sendMail = (values) => {
        const communicationValues = values;
        const {mergeTagsMap} = this.props;
        if(mergeTagsMap) {
            axios.post("http://localhost:8080/sendMail", {
                templateData: mergeTagsMap,
                mailTemplate: this.state.template,
                ...communicationValues
            }).then(() => {
                toastr.success("Success", "Mail send successfully! Please check inbox/spam folder")
                this.closeSendMailModal();
            }).catch(() => {
                toastr.error("Error", "Mail sending failed!")
            });
        }
    };
}

export default connect(state => {
    return {
        ...state.global,
        templateData: state.form.template,
        communication: state.form.communication
    };
})(TemplateDetails);
