import React, { Component } from 'react';
import Layout from './Layout';
import Home from './components/Home';
import Todolist from './components/Todolist';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
          <Todolist />
        </Layout>
      </div>
    );
  }
}

export default App;
