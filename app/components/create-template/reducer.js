import { actions as createTemplateActions } from './actions';

export default (state = {
    template: null
}, action) => {
    switch(action.type) {
        case createTemplateActions.SAVE_TEMPLATE:
            return Object.assign({}, state, {
                template: action.data
            });
        default:
            return state;
    }
};
