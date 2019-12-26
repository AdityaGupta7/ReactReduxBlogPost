import React, { Component } from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <div className="App"> {/* container */}
          <div id="box-1">
            <PostForm />
          </div>
          <div id="box-2">
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
