import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // o qualsiasi altro storage desiderato, come AsyncStorage per React Native

import SaveArticleReducer from '../reducers/SaveArticleReducer';
import CategoryReducer from '../reducers/CategoryReducer';
import CountryReducer from '../reducers/CountryReducer';

// Configurazione di redux-persist
const persistConfig = {
    key: 'root', // La chiave in cui saranno memorizzati i dati nel tuo storage.
    storage, // Il motore di storage da utilizzare, che abbiamo importato in precedenza.
    // Se desideri configurare ulteriori opzioni, consulta la documentazione di redux-persist.
};

const rootReducer = combineReducers({
    saveArticle: SaveArticleReducer,
    category: CategoryReducer,
    country: CountryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = getDefaultMiddleware({
    // Puoi configurare qui eventuali middleware aggiuntivi che desideri utilizzare.
    // Assicurati che redux-persist sia inserito prima di altri middleware per evitare problemi di persistenza.
});

// Aggiungi il middleware al createStore.
const store = configureStore({
    reducer: persistedReducer,
    middleware,
});

// Crea il persistor una sola volta e lo esporta.
const persistor = persistStore(store);

export { store, persistor };
