import {ADD_TODO, DELETE_TODO} from "./actionType"

const initialState = {
    todo : []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case  ADD_TODO:
        return {
            ...state,
            todo : [...state.todo , action.payload]
        };
        case DELETE_TODO : 
        const newTodo = state.todo.filter((e) => e.id !== action.id)
        return {
            ...state,
            todo : newTodo
        }
        default : 
        return state

    }
}

export default reducer