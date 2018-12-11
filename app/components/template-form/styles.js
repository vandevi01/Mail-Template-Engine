import styled from 'styled-components'
import {Heading, AppButton,AppButton1} from '../../generic.styles';

const TemplateContainer = styled.div`
    margin-bottom: 10px;
    label {
        display: block;
        line-height: 30px;
    }
`;

const ActionContainer = styled.div`
    margin-top: 10px;
    button {
        margin-right: 10px;
    }
`;

export {
    TemplateContainer,
    Heading,
    ActionContainer,
    AppButton,
    AppButton1
};
