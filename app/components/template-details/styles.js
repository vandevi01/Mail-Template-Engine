import styled from 'styled-components'
import {Heading, AppButton} from '../../generic.styles';

const ActionContainer = styled.div`
    margin-top: 20px;
    button {
        margin-right: 10px;
    }
`;

const TagList = styled.div`
    margin-top: 20px;
    width: 500px;
    border: 1px solid #eeeeee;
    border-bottom: 0;
    .row {
        width: 100%;
        > div {
            padding: 5px 15px;
            border-bottom: 1px solid #eeeeee;
            display: inline-block;
            width: 50%;
        }
    }
`;

export {
    ActionContainer,
    Heading,
    TagList,
    AppButton
};
