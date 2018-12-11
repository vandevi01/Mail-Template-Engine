import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
// Done to keep the store private and allowing no operations on store directly
export function configureStore() {
    return createStore(
        rootReducer,
        {},
        applyMiddleware(
            // Using thunk for all requests
            thunk
        )
    );
}
