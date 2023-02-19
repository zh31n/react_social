import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./AuthReducer";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    sideBar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;