import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = { key: 'root', storage: AsyncStorage, whiteList: ['rootReducer'] }

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)),);
const persistor = persistStore(Store);

//export default Store;
export { persistor, Store }