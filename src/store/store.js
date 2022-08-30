import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSageMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSageMiddleware();

const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter(Boolean);

const composedEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
