import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./AuthReducer";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    sideBar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
});





let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;