import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleCard from './SimpleCard'
import {connect} from 'react-redux'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button,
  Flex
} from 'rebass'
class App extends Component {
 
  render() {
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
 <b style={{marginBottom:20}}>Yönetim Paneli</b>

<input style={{marginTop:20,width:300,height:50,fontSize:20,borderRadius:10,color:'#555',marginBottom:10,paddingLeft:10}} placeholder="kullanıcı adı"/>
<input style={{width:300,height:50,fontSize:20,borderRadius:10,color:'#555',marginBottom:10,paddingLeft:10}}  placeholder="şifre"/>
<button style={{marginBottom:40,width:300,height:50,fontSize:20,fontWeight:'800',borderRadius:10,color:'gray',backgroundColor:''}} 
       onClick={()=>{this.props.dispatch({type:'az'});}}>Giriş yap</button>
{false&&
<div>
        <button style={{marginBottom:40,width:100,height:50,fontSize:20,fontWeight:'800',borderRadius:10,color:'#555'}} 
       onClick={()=>{this.props.dispatch({type:'az'});}}>-</button>
        {this.props.count}
       <button style={{marginTop:40,width:100,height:50,fontSize:20,fontWeight:'800',borderRadius:10,color:'#555'}} 
       onClick={()=>{this.props.dispatch({type:'art'});}}>+</button>
       </div>
}
        <div className="parent" >
<SimpleCard className="urunler" />
<SimpleCard className="urunler" />
<SimpleCard className="urunler" />
<SimpleCard className="urunler"/>
</div>
        </header>
      </div>
    );
  }
}
const mapstatetoprops=(state)=>({
count:state.count
})
export default connect(mapstatetoprops)(App);
