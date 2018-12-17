import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BasicExample extends React.Component {
    render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">1</Link>
            </li>
            <li>
              <Link to="/about">2</Link>
            </li>
            <li>
              <Link to="/topics">3</Link>
            </li>
          </ul>
  
  
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
    }
  }

  
const reducer =(state = {count:0},action)=>{
switch (action.type){
case 'art':
    return {count:state.count + 1}
case 'az':
    return {count:state.count - 1}
 default:
    return  state
}
}
const store = createStore(reducer)
console.log(store.getState())
ReactDOM.render(<Provider store={store}><BasicExample/></Provider>, document.getElementById('root'))

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  

  
  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }