import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title'
import AddComponents from './components/AddComponents'
import YourToDo from './components/YourToDo'
import "./App.css";
import CurrentTime from './components/CurrentTime';
import List from './components/List';
import { useState,useEffect } from 'react';
import NoTaskLeft from './components/NoTaskLeft';
function App() {
  // let num=[1,2,3,4,5];
  let num=[];
  let count=localStorage.length;
  while(count >= 0){
    num.unshift(JSON.parse(localStorage.getItem(localStorage.key(count))));
    count=count-1;
  }
  count=0;
  let num1=[];
  while(count<num.length-1){
    num1.push(num[count]);
    count++;
  }
  // let [Task,setTask]=useState([]);
  // if(num.length>0 && Task.length===0){
  //   let t=[...Task,...num];
  //   setTask(t);
  //   console.log(Task);
  // }
  const [Task, setTask] = useState([]);

  useEffect(() => {
    if (num.length > 0 && Task.length === 0) {
      let t = [...Task, ...num1];
      setTask(t);
      console.log(t);
    }
  }, []); // empty dependency array ensures this effect runs only once after the initial render

  // sessionStorage.setItem("Task1",Task);
  const addTask=((e)=>{
    let a2=e.target.parentElement.parentElement.childNodes[1].childNodes[0].value;
    let a1=e.target.parentElement.parentElement.childNodes[0].childNodes[0].value;
    let obj={
      Name:a1,
      Date:a2
    }
    //  let Task1=sessionStorage.getItem("Task1");
    if(e.target.parentElement.parentElement.childNodes[0].childNodes[0].value==""){
      alert('Enter a To-do');
    }else if(a2==""){
      alert("Enter a valid date");
    }else if(Task.some(obj1 => {
      return obj1.Name === obj.Name && obj1.Date === obj.Date;
  })){
      alert("Same Task already exists");
    }else{
      let newTask=[...Task,obj]
      localStorage.setItem(`${obj.Name+obj.Date}`,JSON.stringify(obj));
      setTask(newTask);
      e.target.parentElement.parentElement.childNodes[1].childNodes[0].value="";
      e.target.parentElement.parentElement.childNodes[0].childNodes[0].value="";
    }
  });
  const deleteTask=((e)=>{
    let name=e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].textContent;
    let date=e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent;
    let newTask=[...Task];
    newTask = newTask.filter(obj => (obj.Name !== name && obj.Date !== date));
    setTask(newTask);
    localStorage.removeItem(`${name+date}`);
    window.location.reload();

  });
  let i=0;
  return (
  <center className="todo-container">  
    <CurrentTime />
    <Title />
    <AddComponents addTask={addTask}/>
    <NoTaskLeft Task={Task} />
    <YourToDo newTask1={Task} removeTask={deleteTask}></YourToDo>
  </center>
  )
}

export default App


//alternative to 'for' loop is map function
//alternative to 'if' condition are ternary operators & logical operators