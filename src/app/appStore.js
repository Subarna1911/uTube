import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../app/navSlice'

const appStore = configureStore ({

    reducer: {
        app:navReducer,
    }
});

export  default appStore;