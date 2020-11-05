import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTask } from '../../Redux'
import { v4 as uuidv4 } from 'uuid';
import { Button, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function AddTask() {

    const [newTask, setnewTask] = useState("");

    //replaces mapDispatchToProps
    const dispatch = useDispatch();
    return (
        <Card style={{ width: '100%', backgroundColor: "crimson" }}>
            <Card.Body>
                <Card.Title variant="info">ADD TASK</Card.Title>
                <Form.Control value={newTask} onChange={(e) => setnewTask(e.target.value)} type="text" placeholder="ADD TASK" />
                <Button variant="warning"
                    onClick={() => {

                        (newTask !== "") && dispatch(addTask({ id: uuidv4(), Description: newTask, isDone: false }));
                        setnewTask("");


                    }}
                >
                    Add
      </Button>

            </Card.Body>
        </Card>


    )





}

export default connect(null)(AddTask);
