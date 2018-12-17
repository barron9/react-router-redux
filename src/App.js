import React, { Component,Text } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
 
  render() {
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
        <button style={{marginBottom:40,width:100,height:50,fontSize:20,fontWeight:'800',borderRadius:10,color:'#555'}} 
       onClick={()=>{this.props.dispatch({type:'az'});}}>-</button>
        {this.props.count}
       <button style={{marginTop:40,width:100,height:50,fontSize:20,fontWeight:'800',borderRadius:10,color:'#555'}} 
       onClick={()=>{this.props.dispatch({type:'art'});}}>+</button>
        </header>
      </div>
    );
  }
}
const mapstatetoprops=(state)=>({
count:state.count
})
export default connect(mapstatetoprops)(App);
