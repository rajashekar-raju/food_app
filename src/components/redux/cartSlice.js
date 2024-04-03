import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        count:0
    },
    reducers: {
        addCount: (state) => {
            return {
                ...state,
                count: state.count + 1
            };
        }        
    }
})
export const {addCount} = cartSlice.actions
export default cartSlice.reducer