import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../app/navSlice'
import searchReducer from '../app/searchSlice'

const appStore = configureStore ({

    reducer: {
        app:navReducer,
        search:searchReducer,   
    }
});

export  default appStore;