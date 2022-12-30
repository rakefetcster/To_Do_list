import './App.css';
import TodoButtonsComp from './component/TodoButtonsComp';
import { useState } from 'react';
import TodoComp from './component/TodoComp'
import TodoCompUpdate from './component/TodoCompUpdate';
import LogTodoCompViewer from './component/LogTodoCompViewer';
import AddTaskComp from './component/AddTaskComp';
import {useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const App=()=> {
  const [update,setUpdate] = useState(false);
  const [removeButton,setRemoveButton] = useState(false);
  const [add,setAdd] = useState(false);
  const dispatch = useDispatch();

  const dataFromAdd = async(addValue)=>{
    dispatch({type: 'ADD', payload:{"Task": addValue.Task, "Check":0, "_id": uuidv4()}});
    dispatch({type: 'UPDATELOG', payload:{Date: new Date().toLocaleString(), Action : "New Task:" + addValue.Task}});
    setAdd(false);
  }
  const updateData=(data)=>{
    if('update' in data){
      setUpdate(data.update);
      setRemoveButton(true);
    }
    if('addTask' in data){
      setAdd(data.addTask);
    }
   
 }
 const updateFinish = (data)=>{
      setUpdate(data);
      setRemoveButton(data);
 }
  return (
    <div className='main'>
      <div className='app'>
        {update?<TodoCompUpdate callback={updateFinish}/>:<TodoComp/>}
        <TodoButtonsComp removeButton={removeButton} callback={updateData}/>
    </div>
   <div className ="right">
      <div className ="container-fluid">
       <LogTodoCompViewer/>
       {add?<AddTaskComp callback={dataFromAdd}/>:''}

      </div>
   </div>
   </div>
  );
}

export default App;
