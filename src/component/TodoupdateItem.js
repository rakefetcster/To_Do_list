import '../App.css';
import {useDispatch } from 'react-redux';

const TodoupdateItem=(props)=> {
  const dispatch = useDispatch();
  
  const hendleChangedInput=(e)=>{
    dispatch({type: 'UPDATE', payload:{"Task":e.target.value,"_id":e.target.id}});
    
    dispatch({type: 'UPDATELOG', payload:{Date:new Date().toLocaleString(), Action : "Update check id:" +e.target.id + " Task " + e.target.value  }});
    props.callback({"Task":e.target.value,"Check":0,"_id":e.target.id});
    
  }
  return (
    <div>
      <input type='text' className={'inputUpdateCheck'}  id = {props.todoTask._id} defaultValue={props.todoTask.Task} onChange={hendleChangedInput}/>
    </div>
  );
}

export default TodoupdateItem;
