import {ADD_CNT,REM_CNT} from "./features/actionTypes";
const inCount=(data)=>{
    return{
        type:ADD_CNT,
        payload:data
    }
}