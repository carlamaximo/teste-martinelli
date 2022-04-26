import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'testeMartinelli',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export { store, persistor};
