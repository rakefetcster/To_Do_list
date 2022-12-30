import '../App.css';
import { useSelector } from 'react-redux';

const LogTodoCompViewer=()=> {
  const logList1=useSelector((state)=>state.logList);
  logList1.reverse();
  const logList = logList1.slice(0, 4);
  return (
    <div className='logdiv'>
    <h2>Log Actions</h2>
    <ul>
    {logList.map((log, index)=>{
      return(<li key={index} className='logTetails'>{log.Date}  -  {log.Action}</li>);
    })}
    </ul>
      </div>
  );
}

export default LogTodoCompViewer;
