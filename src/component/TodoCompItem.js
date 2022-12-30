import '../App.css';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

const TodoCompItem=(props)=> {
  const [check,setCheck] = useState(props.todoTask.Check)
  const dispatch = useDispatch();

  const hendleChange =async(e)=>{
    if (e.target.checked) {
      setCheck(true);
      dispatch({type: 'UPDATE', payload:{"_id":e.target.id, "Check":1, "Task":e.target.value}})
      dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(), Action : "Assing task as done  - id: "+ e.target.id,  "Task":e.target.value}});
    }
    else{
      setCheck(false);
      dispatch({type: 'UPDATE', payload:{"_id":e.target.id, "Check":0, "Task":e.target.value}})
      dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(), Action : "Uncheck Task  - id: "+ e.target.id}});
      
      
    }

  }
    
  return ( 
    
    <div > 
        <input type="checkbox" value={props.todoTask.Task} checked={check} id={props.todoTask._id} onChange={hendleChange}/>
        <label className={check? 'checkVissble':'checkNotVissble'}> {props.todoTask.Task}</label>
    </div> 
  );
}

export default TodoCompItem;
