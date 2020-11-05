import { createStore, applyMiddleware } from 'redux';
import { ToDoReducer } from './ToDoList/ToDoReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(ToDoReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;

