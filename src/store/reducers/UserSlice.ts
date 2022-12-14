import {IUsers} from "../../models/IUsers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUsers[];
    isLoading: boolean;
    error: string;
    counter:number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    counter: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state,action:PayloadAction<number>){
            state.counter += action.payload
        }
    }
})

export default userSlice.reducer