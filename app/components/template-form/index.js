import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../services/formValidations';
import FKModal from '../common/fk-modal';
import {
    TemplateContainer,
    Heading,
    ActionContainer,
    AppButton,
    AppButton1
} from './styles';
import {Link} from 'react-router-dom';



// This component focuses on rendering a input tag for getting the template
let TemplateForm = ({handleSubmit}) => {
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <TemplateContainer>
                <Heading>Template</Heading>
                <Field name="mailTemplate"
                       component="textarea"
                       rows={20}
                       validate={[required]}
                       type="text"/>
                <ActionContainer>
                    <AppButton className="medium filled">Save to Storage</AppButton>
                    <AppButton1 className="medium filled">
                        <Link to="/">Cancel</Link>
                    </AppButton1>
                </ActionContainer>
            </TemplateContainer>
        </form>
        </div>
    );

};

export default reduxForm({
    form: 'templateData'
})(TemplateForm);
