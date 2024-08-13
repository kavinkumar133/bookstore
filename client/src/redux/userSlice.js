import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user:[
            
        ],
        items:[

        ]
    },
    reducers: {
        setToken:(state,action)=>{
            state.token=action.payload;
        },
        removerToken:(state)=>{
            state.token=null;

        },
        addtoitems:(state,action)=>{
            state.items.push(action.payload);
        },
    },
});

export const {setToken,removerToken,addtoitems}=userSlice.actions;
export default userSlice.reducer