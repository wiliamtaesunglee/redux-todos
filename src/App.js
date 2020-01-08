import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './redux/reducers/todos/todos.actions-creators';
import './App.scss';

const App = ({state, handleAddToDo}) => (
    <div className="App">
      <form onSubmit={handleAddToDo}>
        <input type='text' name='todo'/>
        <button type='submit'>Adicionar</button>
      </form>

      {console.log('app :', state, ' and ', handleAddToDo)}

      <ul>
        {state.map(item => <li className={item.completed ? 'completed' : null} key={item.id}>{item.text}</li>)}
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
