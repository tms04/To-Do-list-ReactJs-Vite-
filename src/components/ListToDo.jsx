import YourToDo from "./YourToDo";
function ListToDo({task}){
    return<div className="todo-components">  
        <YourToDo task={task}/>
    </div>
}

export default ListToDo;