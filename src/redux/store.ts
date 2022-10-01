import { configureStore } from '@reduxjs/toolkit';
// Import type { TypedUseSelectorHook } { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persistor, dispatch, useSelector, useDispatch };
