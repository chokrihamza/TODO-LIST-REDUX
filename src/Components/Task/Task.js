import React, { useState } from "react";
import { checkTask, deleteTask, editTask } from "../../Redux"
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import './Task.css'
function Task({ item }) {

    const [Description, setDescription] = useState(item.Description);

    const [Edit, setEdit] = useState(true)
    const dispatch = useDispatch()

    let handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div className="Tacks">


            {Edit ? <span>{item.Description}</span> : <Form.Control value={Description} onChange={handleChangeDescription} type="text" placeholder="ADD TASK" />}

            <Button variant="link" onClick={() => { setEdit(!Edit); dispatch(editTask({ id: item.id, description: Description })) }}>{Edit ? 'EDIT' : 'UPDATE'}</Button>
            <Button

                color="success"
                onClick={() => dispatch(checkTask(item.id))}>
                {item.isDone ? "Done" : "Undo"}
            </Button>
            <Button variant="danger"
                color="success"
                onClick={() => dispatch(deleteTask(item.id))}>
                Delete
            </Button>


        </div>


    )






}

export default Task;