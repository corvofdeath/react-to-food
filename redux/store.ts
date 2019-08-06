import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
	cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function initializeStore () {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
