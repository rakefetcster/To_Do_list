import '../App.css';
import { useState } from 'react';

const AddTaskComp=(props)=> {
  const [task,setTask] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault();
    props.callback({"Check": 0,"Task" : task})
  }

  return (
    <div className='addDiv'>
    <h2>Add Task</h2>
     <form onSubmit={handleSubmit}>
      <label className='fontLabel'>Task:{''}</label>
      <input type="text" size="50"onChange={(e)=>setTask(e.target.value)}/>
      <br/>
      <button className='buttonAdd' type='submit'>Save</button>
     </form>

    </div>
  );
}

export default AddTaskComp;
