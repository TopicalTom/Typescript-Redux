import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any
};

const App: FC<AppProps> = ({ todos, fetchTodos }) => {

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>Hi there!</div>
    );
};

const mapStateToProps = (state: StoreState): { todos: Todo[]} => {
    return { 
        todos: state.todos
    };
};

export default connect( mapStateToProps, { fetchTodos })(App);
