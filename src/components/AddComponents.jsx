import styles from "./AddComponents.module.css"
import { IoAdd } from "react-icons/io5";
function AddComponents({addTask}){
    return  <div className="container text-center">
                <div className={`row ${styles["kg-row"]}`}>
                    <div className="col-6"><input type="text" placeholder="Enter your todo"/></div>
                    <div className="col-4"><input type="date" /></div>
                    <div className="col-2"><button type="button" className="btn btn-success kg-button" onClick={addTask}>ADD</button></div>
                </div>
            </div>
    
}

export default AddComponents;