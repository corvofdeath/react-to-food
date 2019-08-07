import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart/reducer';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	filter: filterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function initializeStore () {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
