import React from 'react';
import styles from "./YourToDo.module.css";
import { MdDeleteOutline } from "react-icons/md";
function YourToDo({ newTask1,removeTask }) {
    return (
        <>
            {newTask1.map((task, index) => (
                <div className="container" key={index}>
                    <div className={`row ${styles["kg-row"]}`}>
                        <div className="col-6 text-start">{task.Name}</div>
                        <div className="col-4 text-start">{task.Date}</div>
                        <div className="col-2">
                            <button type="button" className="btn btn-danger kg-button" onClick={removeTask}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default YourToDo;