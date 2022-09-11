import { INCREMENT } from "../constants/action-types";
import { DECREMENT } from "../constants/action-types";
import { CHANGETITLE } from "../constants/action-types";


export const incrementCounter =() =>{
    return{
type:INCREMENT
    }
};
export const decrementCounter =() =>{
    return{
type:DECREMENT
    }
};
export const changeTitle =(value) =>{
    return{
type:CHANGETITLE,
payload:value
    }
};