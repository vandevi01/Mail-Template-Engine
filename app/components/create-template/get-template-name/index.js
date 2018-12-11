import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../../services/formValidations';
import {ContainerForm, AppButton} from './styles';

const GetTemplateName = ({handleSubmit}) => {
    return (
        <ContainerForm onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="name">Template Name</label>
                <Field name="name"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[required]}
                       type="text"/>
            </div>
            <Field name="templateData"
                   component="input"
                   type="hidden"/>
            <AppButton type="submit"
                       className="medium filled">Save</AppButton>
        </ContainerForm>
    );
};

export default reduxForm({
    // a unique name for the form
    form: 'templateName'
})(GetTemplateName);
