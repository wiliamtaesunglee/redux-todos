import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from './redux/reducers/todos/todos.actions-creators';
import './App.scss';

const App = ({state, handleAddToDo, handleToggleTodo}) => (
    <div className="App">
      <form onSubmit={handleAddToDo}>
        <input type='text' name='todo'/>
        <button type='submit'>Adicionar</button>
      </form>

      <ul>
        {state.map(item => <li onClick={handleToggleTodo(item.id)} className={item.completed ? 'completed' : null} key={item.id}>{item.text}</li>)}
      </ul>

      <div>
        <h3>Mostrar</h3>
        <span>Todos</span> | <span>Finalizados</span> | <span>A fazer</span>
      </div>
    </div>
  );

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  handleAddToDo: (e) =>  {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = '';
  },
  handleToggleTodo: (id) => (e) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
