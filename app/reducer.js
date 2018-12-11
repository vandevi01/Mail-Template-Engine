import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import createTemplateReducer from './components/create-template/reducer';
import {actions as globalActions} from './actions';

// Global reducer used through out the App
const global = (state = {
    mergeTags: null,
    mergeTagsMap: null,
    mergeTagsFetching: false
}, action) => {
    switch(action.type) {
        case globalActions.SET_MERGE_TAGS:
            let mergeTagsMap = {};
            action.data.forEach(({name, value}) => {
                mergeTagsMap[name] = value;
            });
            return Object.assign({}, state, {
                mergeTags: action.data,
                mergeTagsMap,
                mergeTagsFetching: false
            });
        case globalActions.MERGE_TAGS_FETCHING_IN_PROGRESS:
            return Object.assign({}, state, {
                mergeTags: null,
                mergeTagsMap: null,
                mergeTagsFetching: true
            });
        default:
            return state;
    }
};


const rootReducer = combineReducers({
	toastr: toastrReducer,
    form: formReducer,
    createTemplate: createTemplateReducer,
    global
});

export default rootReducer;
