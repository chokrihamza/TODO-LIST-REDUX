import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, DELETE_TASK, CHECK_TASK, EDIT_TASK } from './ToDoTypes';

const initialState = {
    todo: [
        { id: uuidv4(), Description: "Description1", isDone: false },
        { id: uuidv4(), Description: "Description2", isDone: false },
        { id: uuidv4(), Description: "Description3", isDone: true },
        { id: uuidv4(), Description: "Description4", isDone: false },
        { id: uuidv4(), Description: "Description5", isDone: true },
    ],
}

export const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, todo: [...state.todo, action.payload],
            };
        case CHECK_TASK:
            return {
                ...state,
                todo: state.todo.map((el) =>
                    el.id === action.payload ? { ...el, isDone: !el.isDone } : el
                ),
            };

        case EDIT_TASK:
            return {
                ...state,
                todo: state.todo.map((el) =>
                    el.id === action.payload.id
                        ? { ...el, Description: action.payload.description }
                        : el
                ),
            };

        case DELETE_TASK:
            return {
                ...state,
                todo: state.todo.filter((el) => el.id != action.payload),
            };

        default:
            return state;
    }
};