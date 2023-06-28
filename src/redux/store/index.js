import { combineReducers } from "redux";

import SaveArticleReducer from "../reducers/SaveArticleReducer";
import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../reducers/CategoryReducer";
import CountryReducer from "../reducers/CountryReducer";


const store = configureStore({
    reducer: combineReducers({

        saveArticle: SaveArticleReducer,
        category: CategoryReducer,
        country : CountryReducer

    })
})

export default store;