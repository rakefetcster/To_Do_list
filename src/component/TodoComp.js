import '../App.css';
import {useEffect} from 'react';
import axios from 'axios';
import TodoCompItem from './TodoCompItem';
import {DragDropContext, Droppable ,Draggable} from 'react-beautiful-dnd';
import { useSelector,useDispatch } from 'react-redux';

const url = 'http://localhost:5000/todo/';

const TodoComp=(props)=> {
  const dispatch = useDispatch();
  const drugList=useSelector((state)=>state.todoList);

  useEffect(()=>{
    const getAll = async()=>{
      const {data} = await axios.get(url);
      dispatch({type: 'INIT', payload:data});
      dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(), Action : "WELCOME - Load data from DB"}});
    }
    getAll();
  },[dispatch])
  
 
  const hendleDrugEnd=async(result)=>{
    if (!result.destination) return ;
    const items = Array.from(drugList);
    const [reorderItem] = items.splice(result.source.index,1);
    items.splice(result.destination.index,0,reorderItem);
    dispatch({type: 'RESTORE', payload: items});
    dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(),Action : "Action: drug and drop from to do list: To do id:"+ result.draggableId + " from place :" + result.source.index +" To place:" + result.destination.index }});

  }
  return (
    <div>
     <h1>To Do List</h1>
     <DragDropContext onDragEnd={hendleDrugEnd}>
     <Droppable droppableId="allTaskDiv">
     {(provided) => (
     <div  className='allTaskDiv' {...provided.droppableProps} ref={provided.innerRef}>
     
     {
      drugList.map((todoTask,index)=>{
          return(
            <Draggable key={todoTask._id} draggableId={todoTask._id} index={index}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
              <div>
              <TodoCompItem  todoTask={todoTask} index={index}/>
              </div>
              </div>
            )}
              </Draggable>
              )}
             
          )
     }
     {provided.placeholder}
     
     </div>
     )}
     </Droppable>
     </ DragDropContext >
    </div>
  );
}

export default TodoComp;
