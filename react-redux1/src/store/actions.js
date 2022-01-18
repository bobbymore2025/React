import { ADD_TODO, DELETE_TODO }from "./actionType"



export const addTodo = (payload) =>  ({
    type : ADD_TODO,
    payload
})

export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    id
})