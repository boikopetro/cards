import {combineReducers, createStore} from 'redux'
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {errorReducer} from "./errorReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer";
import {newPasswordReducer} from "./newPasswordReducer";
import {testReducer} from "./testReducer";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({

    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    error: errorReducer,
    forgotPassword: forgotPasswordReducer,
    newPassword: newPasswordReducer,
    test: testReducer,

});

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;