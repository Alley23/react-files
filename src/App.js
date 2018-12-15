import React, { Component } from 'react';
import Layout from './Layout';
import Home from './components/Home';
import TodoList from './components/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
          <TodoList />
        </Layout>
      </div>
    );
  }
}

export default App;
