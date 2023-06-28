import { combineReducers } from "redux";

import SaveArticleReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: combineReducers({

        saveArticle: SaveArticleReducer

    })
})

export default store;