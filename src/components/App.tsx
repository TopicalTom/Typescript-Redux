import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any
};

const App: FC<AppProps> = ({ todos, fetchTodos }) => {

    const onButtonClick = (): void => {
        fetchTodos();
    };

    const renderList = (): JSX.Element[] => {
        return todos.map((todo: Todo) => {
            return <div key={todo.id}>{todo.title}</div>
        })
    }

    return (
        <div>
            <button onClick={onButtonClick}>Fetch</button>
            {renderList()}
        </div>
    );
};

const mapStateToProps = (state: StoreState): { todos: Todo[]} => {
    return { 
        todos: state.todos
    };
};

export default connect( mapStateToProps, { fetchTodos })(App);

/*
            {todos.map((todo: Todo) => {
                return (
                    <div key={todo.id}>{todo.title}</div>
                )
            })}
*/
