import '../App.css';
import axios from 'axios';
import TodoupdateItem from './TodoupdateItem';
import { useSelector,useDispatch } from 'react-redux';

const url = 'http://localhost:5000/todo/';

const TodoCompUpdate=(props)=> {
  const dispatch = useDispatch();

  const todoList=useSelector((state)=>state.todoList);
  
  const changeInput =(inputChange)=>{
    dispatch({type: 'UPDATE', payload:inputChange});
    dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(),Action : "Change Task:" + inputChange}});

  }
  const save = async()=>{
    const {data} = await axios.post(url,todoList);
    console.log(data);
    dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(),Action : "Data Save"}});
    props.callback(false);
  }
  const discard=async()=>{
    const {data} = await axios.get(url);
    dispatch({type: 'RESTORE', payload:data});
    dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(), Action : "Restore from DB:" }});
    props.callback(false);
  }
  
 
  return (
    <div>
     <h1>To Do List</h1>
     <div className='h2Update'>Update Task</div>
     <div className='allUpdateDiv'>
      <div className='updateDivTask'>
     {
      todoList.map((todoTask,t)=>{
          return(
            todoTask.Check?'':
             <div key={todoTask._id} id={t}>
            <TodoupdateItem todoTask={todoTask} callback={changeInput}/>
            </div>
            
          )
      })}
      </div>
      <div className='buttonDivUpdate'>
        <button className='button-47' onClick={save}>Save</button>  
        <button className='button-47' onClick={discard}>Discard</button>
      </div>
      </div>
    </div>
  );
}

export default TodoCompUpdate;
