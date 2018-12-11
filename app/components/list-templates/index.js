import React from 'react';
import {
    Container,
    TemplateBox,
    CreateNew,
    ActionContainer,
    AppButton1
} from './styles';
import {Link} from 'react-router-dom';
import CreateMergeTag from '../create-merge-tag';
import FKModal from '../common/fk-modal';
import {cpService} from "../../services/dataService";
import {toastr} from 'react-redux-toastr';
import Loader from '../common/loader';
import {connect} from "react-redux";
import {setMergeTags} from '../../actions';

// This component focuses on listing of templates.
// Reading of templates happens from localStorage
class ListTemplate extends React.Component {
    constructor(props) {
        super(props);
        let currentTemplates;
        try {
            currentTemplates = JSON.parse(localStorage.getItem("templates")) || {};
        } catch(e) {
            currentTemplates = {};
        }
        this.state = {
            showLoader: false,
            currentTemplates
        };
    }
    render() {
        const {
            currentTemplates,
            mergeTagModalOpen,
            showLoader
        } = this.state;
        return (
            <Container>
                {showLoader && <Loader/>}
                <ActionContainer>
                    <AppButton1 className="medium filled"
                               onClick={this.openCreateMergeTagModal}>Create Merge Tag</AppButton1>
                </ActionContainer>
                <div className="clear"></div>
                {Object.keys(currentTemplates).map(templateName => (
                    <Link to={"/template/" + templateName} key={templateName}>
                        <TemplateBox>
                            <div>{templateName}</div>
                        </TemplateBox>
                    </Link>
                ))}
                <Link to={"/create-template"} key="__CREATE__">
                    <TemplateBox>
                        <CreateNew>CREATE NEW TEMPLATE</CreateNew>
                    </TemplateBox>
                </Link>
                <FKModal closeModal={this.closeCreateMergeTagModal}
                         config={{
                             isModalOpen: mergeTagModalOpen,
                             title: "Create Merge Tag"
                         }}>
                    <CreateMergeTag onSubmit={this.createMergeTag}/>
                </FKModal>
                <div className="clear"></div>
            </Container>
        );
    }
    openCreateMergeTagModal = () => {
        this.setState({
            mergeTagModalOpen: true
        });
    };
    closeCreateMergeTagModal = () => {
        this.setState({
            mergeTagModalOpen: false
        });
    };
    // Post call to backend for creating merge tags
    createMergeTag = (values) => {
        this.setState({
            showLoader: true
        });
        cpService.post("createMergeTag", {}, {
            data: values
        }).then(() => {
            toastr.success("Success", "Merge tag created successfully");
            // Updating Store
            this.props.dispatch(setMergeTags([...this.props.mergeTags, values]));
            this.setState({
                showLoader: false
            });
            this.closeCreateMergeTagModal();
        }).catch(() => {
            this.setState({
                showLoader: false
            });
        });
    };
}

export default connect(({global}) => {
    return {
        mergeTags: global.mergeTags
    };
})(ListTemplate);

