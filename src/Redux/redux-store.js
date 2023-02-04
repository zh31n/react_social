import { combineReducers, createStore } from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    sideBar: SidebarReducer
});



let store = createStore(reducers);

export default store;