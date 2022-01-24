import React, { useState, useContext } from "react";
import { addTodo, deleteTodo } from "../store/action";
import {useDispatch,} from "react-redux"
import {getState} from "../store/store"
import { nanoid } from "nanoid";


const Todo = () => {
  const [text, setText] = useState("");
   const dispatch=useDispatch();
    const [state, setstate] = useState(0)
   const {todo} = getState();

    const handleAddtoTodo = () => {
       const payload = {
         id : nanoid(5),
         title : text,
         status : false
        }
        dispatch(addTodo(payload))
        setText("")

    }

    const editTodo = (id, title) => {
      dispatch(deleteTodo(id))
      setText(title)
    }

  
  return (
      <div>
    <div>
      <input
     
      value={text}
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddtoTodo}>Add Todo</button>
    </div>
    <div>
    {
        todo.map((e) => (

            <div key={e.id} >
              <p>{e.title}</p>
              <div>
              <button onClick={() => editTodo(e.id, e.title)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
              </div>
            </div>
        ))
    }
    </div>
    </div>
  );
};

export default Todo;