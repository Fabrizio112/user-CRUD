import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice"
import formReducer from "./formSlice"

const middlewareForPersistanceState = state => next => action => {
    next(action)
    let stateUser = state.getState()
    window.localStorage.setItem("__redux__state", JSON.stringify(stateUser.user))
}

export const store = configureStore({
    reducer: {
        user: userReducer,
        form: formReducer
    },
    middleware: [middlewareForPersistanceState]
})