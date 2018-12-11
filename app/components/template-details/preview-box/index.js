import React from 'react';
import {PreviewContainer} from './preview-box.styles';
import Handlebars from 'handlebars';
import {toastr} from 'react-redux-toastr';

// Component for previewing the content on the UI for the template
export const PreviewBox = ({template, templateData}) => {
    let compiledTemplate = "";
    try {
        compiledTemplate = Handlebars.compile(template)(templateData);
    } catch (e) {
        // Throw error if handlebars parsing failed
        toastr.error("Error", "Invalid compile encountered");
    }
    // dangerouslySetInnerHTML expects the result to be in this format
    compiledTemplate = {__html: compiledTemplate};
    return (
        <PreviewContainer dangerouslySetInnerHTML={compiledTemplate}></PreviewContainer>
    );
};
