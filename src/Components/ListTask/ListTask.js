
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

function ListTask() {
    const [Filter, setFilter] = useState(true)
    const Items = useSelector((state) => state.todo);
    console.log(Items)
    return (
        <div>
            <Button variant={Filter ? 'outline-info' : 'outline-success'} onClick={() => { setFilter(!Filter) }}>{Filter ? 'SHOW ALL TASKS' : 'SHOW DONE TASKS'}</Button>
            {!Filter ?
                Items.map((el, index) => (

                    <Task key={index} item={el} />

                )) : Items.map((el, index) =>
                    el.isDone ? (

                        <Task key={index} item={el} />
                    ) : null)


            }
        </div>
    )
}

export default ListTask;