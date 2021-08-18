import {combineReducers, createStore} from 'redux'
import {someReducer} from "./someReducer";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({

    someReducer: someReducer
});

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;