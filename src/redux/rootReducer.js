const initialValue = {
  todoList: [],
  logList: [],
};

// state - current state
// action - {type: 'WHAT_TO_DO', [payload: value]}
const applyToDo = (state = initialValue, action) => {
  switch (action.type) {
    case 'INIT':{
      return { ...state, todoList: action.payload };
    }
    
    case 'ADD':{
      return { ...state, todoList: [...state.todoList,action.payload] };
    }
    
    case 'RESTORE':{
        return { ...state, todoList: action.payload };
    }
    case 'UPDATE':{
      const todoList = [...state.todoList];
      const index = todoList.findIndex((item)=>item._id===action.payload._id)
      if(index !== -1){
        todoList[index] = action.payload;
      }
     return { ...state, todoList};
    }
     case 'DELETE':{
        const todoList = state.todoList.filter((item)=>item._id !== action.payload);
        return { ...state, todoList};
      }

     case 'UPDATELOG':
      return { ...state, logList: [...state.logList,action.payload] }; 

    default:
      return state;
  }
};

export default applyToDo;