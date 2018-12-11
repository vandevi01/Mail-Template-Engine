import styled from 'styled-components'

// Bold heading with font size of 18px
const Heading = styled.div`
    font-family: ${props => props.theme.appBoldFont};
    line-height: 36px;
    font-size: 18px;
`;

// App Generic Button used through out the project
const AppButton = styled.button`
    border-radius: 2px;
    display: inline-block;
    outline: none;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    &.medium {
        padding: 0 12px;
        line-height: 28px;
        height: 30px;
    }
    a {
        color: white;
    }
    &:not([disabled]) {
        border: 1px solid ${props => props.theme.appPrimary};
        color: $black;
        background-color: ${props => props.theme.white};
        &.filled {
            background-color: ${props => props.theme.appPrimary};
            color: ${props => props.theme.white};
        }
        &:hover {
            opacity: 0.8;
        }
        &:active {
            opacity: 0.9;
        }
    }
`;

// App Generic Button used through out the project
const AppButton1 = styled.button`
    border-radius: 2px;
    display: inline-block;
    outline: none;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    &.medium {
        padding: 0 12px;
        line-height: 28px;
        height: 30px;
    }
    a {
        color: white;
    }
    &:not([disabled]) {
        border: 1px solid ${props => props.theme.appPrimary};
        color: $black;
        background-color: ${props => props.theme.white};
        &.filled {
            background-color: ${props => props.theme.appRed};
            color: ${props => props.theme.white};
        }
        &:hover {
            opacity: 0.8;
        }
        &:active {
            opacity: 0.9;
        }
    }
`;

export {
    Heading,
    AppButton,
    AppButton1
};
