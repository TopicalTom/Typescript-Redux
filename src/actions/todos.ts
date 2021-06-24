import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number,
    title: string,
    completed: boolean;
};

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number;
}

const rootUrl = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = (): Function => async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(rootUrl);

    dispatch<FetchTodosAction>({
        type: ActionTypes.fetchTodos,
        payload: response.data
    })
};

/*
export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
};
*/

export const deleteTodo = (): Function => (dispatch: Dispatch) => {
    dispatch<DeleteTodoAction>({
        type: ActionTypes.deleteTodo,
        payload: 1
    });
};