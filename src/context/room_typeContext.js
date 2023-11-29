import dataContext from "./dataContext";
import serverAxios from '../config/serverAxios';
import { useEffect } from "react";

const roomTypeReducer = (state, action) =>{
    switch(action.type){
        case "get_rooms":
            return {type_rooms: action.payload};
        case "get_room":
            return {...state,room: action.payload}
        default: 
            return state;
    }
}


const getRoomsType = dispatch => async() => {
    try{
        const response = await serverAxios.get('/room-type');
        dispatch({type: "get_rooms", payload: response.data.data})
    }catch(error){
        console.log(error)
    }
}

const getRoom = dispatch => async({id}) => {
    try{
        const response = await serverAxios.get(`/room-type/${id}`);
        console.log(response)
        //dispatch({type: "get_room", payload: response.data})
    }catch(error){
        console.log(error)
    }
}

export const {Provider, Context} = 
    dataContext(
        roomTypeReducer,
        {
            getRoomsType,
            getRoom
        },
        {
            type_rooms:[],
            errors:'',
            room:null
        }
    )