import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {email, required} from '../../../services/formValidations';
import {ContainerForm, AppButton} from './send-mail.styles';

const SendMailForm = ({handleSubmit}) => {
    return (
        <ContainerForm onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="senderMail">Sender</label>
                <Field name="senderMail"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[required, email]}
                       type="text"/>
            </div>
            <div className="input-field">
                <label htmlFor="senderMail">Receiver</label>
                <Field name="receiverMail"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[email, required]}
                       type="text"/>
            </div>
            <div className="input-field">
                <label htmlFor="subject">Subject</label>
                <Field name="subject"
                       autoComplete="off"
                       autoCorrect="off"
                       component="input"
                       validate={[required]}
                       type="text"/>
            </div>
            <AppButton type="submit"
                       className="medium filled">Send mail</AppButton>
        </ContainerForm>
    );
};

export default reduxForm({
    // a unique name for the form
    form: 'communication'
})(SendMailForm);
