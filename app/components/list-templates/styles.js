import styled from 'styled-components'
import {AppButton, AppButton1} from '../../generic.styles';

const Container = styled.div`
    margin-bottom: 10px;
    label {
        display: block;
        line-height: 30px;
    }
`;
const TemplateBox = styled.div`
    margin-top: 10px;
    border: 1px solid #cccccc;
    display: table;
    width: 150px;
    height: 200px;
    margin-right: 20px;
    text-align: center;
    float: left;
    cursor: pointer;
    &:hover {
        border: 1px solid #eea236;
    }
    div {
        display: table-cell;
        vertical-align: middle;
    }
`;
const CreateNew = styled.div`
    font-family: ${props => props.theme.appBoldFont};
`;
const ActionContainer = styled.div`
    margin: 10px 0;
    float: right;
    button {
        margin-right: 10px;
    }
`;
export {
    Container,
    AppButton,
    CreateNew,
    ActionContainer,
    TemplateBox,AppButton1
};
