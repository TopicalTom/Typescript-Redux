import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): Function;
    deleteTodo(): Function;
};

const App = ({ todos, fetchTodos, deleteTodo }: AppProps) => {
    const [ fetching, setFetching ] = useState(false);

    const onButtonClick = (): void => {
        fetchTodos();
        setFetching(true);
    };

    const onTodoClick = (id: number): void => {
        deleteTodo();
    };

    useEffect(() => {
        if (todos && todos.length !== 0) {
            setFetching(false);
        };
    }, [fetching, todos]);

    return (
        <div>
            <button onClick={onButtonClick}>Fetch</button>
            {fetching ? 'Loading' : null}
            {todos.map((todo: Todo) => {
                return (
                    <div 
                        key={todo.id}
                        onClick={() => onTodoClick(todo.id)}>
                        {todo.title}
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = (state: StoreState): { todos: Todo[]} => {
    return { 
        todos: state.todos
    };
};

export default connect( mapStateToProps, { fetchTodos, deleteTodo })(App);
