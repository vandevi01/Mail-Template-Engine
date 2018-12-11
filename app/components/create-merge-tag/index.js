import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../services/formValidations';
import {ContainerForm, AppButton} from './styles';

const SendMailForm = ({handleSubmit}) => {
    return (
        <ContainerForm onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <Field name="name"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[required]}
                       type="text"/>
            </div>
            <div className="input-field">
                <label htmlFor="value">Value</label>
                <Field name="value"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[required]}
                       type="text"/>
            </div>
            <AppButton type="submit"
                       className="medium filled">Create</AppButton>
        </ContainerForm>
    );
};

export default reduxForm({
    // a unique name for the form
    form: 'mergeTag'
})(SendMailForm);
