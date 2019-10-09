import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import VisibleTodos from './components/VisibleTodos';
import Filters from './components/Filters';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AddTodo />
        <VisibleTodos />
        <Filters />
      </div>
    );
  }
}

export default App;

