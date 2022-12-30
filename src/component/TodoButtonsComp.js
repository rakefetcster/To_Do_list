import '../App.css';

const TodoButtonsComp=(props)=> {
    const updateTask=()=>{
      props.callback({"update":true});
    }
  const addTask=()=>{
    props.callback({"addTask":true});
  }
  
  return (
   
    <div className="buttonDiv">
      {props.removeButton?'':<button className='button-47' onClick={addTask}>Create New</button>}
      {props.removeButton?'':<button className='button-47' onClick={updateTask}>Update</button>}
     
  </div>
  
  
 

  );
}

export default TodoButtonsComp;
