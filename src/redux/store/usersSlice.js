import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
    users: [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net"
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org"
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn.Skiles",
            email: "Telly.Hoeger@billy.biz"
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime_Nienow",
            email: "Sherwood@rosamond.me"
        },
        {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphine",
            email: "Chaim_McDermott@dana.io"
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz"
        },
    ]
}
const INITIAL_DEFAULT_STATE = initialUsersState

const initialAppState = (() => {
    const persistedState = localStorage.getItem("__redux__state");
    console.log(JSON.parse(persistedState))
    if (persistedState) {
        return JSON.parse(persistedState)
    }
    return INITIAL_DEFAULT_STATE
})()
const userSlice = createSlice({
    name: "user",
    initialState: initialAppState,
    reducers: {
        removeUser: (state, action) => {
            let idUserToDelete = action.payload
            let newState = state.users.filter(user => user.id != idUserToDelete)
            state.users = newState
        },
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        editUser: (state, action) => {
            let newState = state.users.map(user => user.id === action.payload.id ? action.payload : user)
            state.users = newState
        },

    }
})

export const { removeUser, addUser, editUser } = userSlice.actions
export default userSlice.reducer