import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: ${props => props.theme.black};
`;

const Loader = styled.div`
    border: solid #b5b5b5;
    border-radius: 50%;
    border-top-color: ${props => props.theme.appPrimary};
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    &.large {
        width: 60px;
        height: 60px;
        margin-left: -30px;
        margin-top: -30px;
        border-width: 6px;
    }
    &.small {
        width: 40px;
        height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        border-width: 4px;
    }
`;

export {
    Container,
    Loader,
    Overlay
};
