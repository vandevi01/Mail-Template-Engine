import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.theme.appPrimary};
    color: ${props => props.theme.white};;
    height: 60px;
    position: relative;
    z-index: 99;
    -webkit-transition: all 2s ease 0s; /* Safari */
    transition: all 2s ease 0s;
`;

const AppTitle = styled.div`
    font-size: 20px;
    float: left;
    line-height: 60px;
    margin-left: 20px;
`;

export {
    Container,
    AppTitle
};
