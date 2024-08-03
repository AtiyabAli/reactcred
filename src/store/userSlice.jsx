import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./userList";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUsers : (state, action) => {
            state.push(action.payload)
        },
        updateUser : (state, action) => {
            const {id, name, email} = action.payload;
            const uu = state.find((user) => user.id === Number(id));
            if(uu){
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser : (state, action) => {
            const {id} = action.payload;
            const uu = state.find((user) => user.id === id);
            if(uu){

                return state.filter((elm)=> elm.id !== id)
            }
        }
    }
})

export default userSlice.reducer;
export const {addUsers, updateUser, deleteUser} = userSlice.actions;

