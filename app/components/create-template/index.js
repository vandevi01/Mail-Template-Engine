import React from 'react';
import {connect} from "react-redux";
import TemplateForm from './../template-form';
import {toastr} from 'react-redux-toastr';
import FKModal from '../common/fk-modal';
import GetTemplateName from './get-template-name';
import {saveTemplate} from './actions';
import {TagList} from '../template-details/styles';
import Loader from '../common/loader';

// Creating a new template using empty input-box and list of tags being shown
class CreateTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            showGetTemplateName
        } = this.state;
        const {mergeTags, mergeTagsFetching} = this.props;
        return (
            <React.Fragment>
                {mergeTagsFetching && <Loader />}
                <TemplateForm onSubmit={this.getTemplateNameModal}/>
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
                <FKModal closeModal={this.closeModal}
                         config={{
                             isModalOpen: showGetTemplateName,
                             title: "Enter Template Name"
                         }}>
                    <GetTemplateName onSubmit={this.saveToStorage}/>
                </FKModal>
            </React.Fragment>
        );
    }
    getTemplateNameModal = (values) => {
        this.props.dispatch(saveTemplate(values.mailTemplate));
        this.setState({
            showGetTemplateName: true
        });
    };
    closeModal = () => {
        this.setState({
            showGetTemplateName: false
        });
    };
    saveToStorage = ({name: templateName}) => {
        const {template} = this.props.createTemplate;
        let templates;
        try {
            templates = JSON.parse(localStorage.getItem("templates")) || {};
        } catch(e) {
            templates = {};
        }
        if(templates[templateName]) {
            toastr.warning("Warning", "Template already exists! Please try some other name");
        } else {
            templates[templateName] = template;
            localStorage.setItem("templates", JSON.stringify(templates));
            toastr.success("Success", "Template saved successfully");
            this.closeModal();
        }
    };
}

export default connect(state => {
    return {
        ...state.global,
        createTemplate: state.createTemplate,
        templateData: state.form.template,
        communication: state.form.communication,
        templateName: state.form.templateName
    };
})(CreateTemplate);
