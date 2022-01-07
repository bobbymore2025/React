const action ={type:"INC_COUNT",payload:1}
class Store{
    constructor(reducer,init){
        this.reducer=reducer,
        this.state=init;
    }
    getstate(){
        return(this.state);

    }
    dispatch(action){
        this.state=this.reducer(this.state,action)
    }
    getstate(){
        return(this.state);

    }

}
const reducer=(state,action)=>{
    switch(type){
        case "INC_COUNT":
        return{...state,count:state.count+action.payload}
    
        case "DEC_COUNT":
        return{...state,count:state.count+action.payload}
     case "ADD_TODO":
         return{...state,Toto:state.todo,payload}
    defalut:
    return state;
    } 

}
const init={count:0};
const store=new Store(reducer,init); 
console.log(store.getstate());
store.dispatch({type:"INC_COUNT",payload:1});
console.log(store.getstate());
