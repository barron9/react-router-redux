import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button
  } from 'rebass'

 class About extends React.Component {
    render(){
  return (
    <div>
      <Card
  p={4}
  py={6}
  backgroundImage='url(https://source.unsplash.com/random/1024x768)'
  backgroundSize='cover'
  borderRadius={0}
  color='white'
  bg='darkgray'
  >
  <Heading
    textAlign='center'
    fontSize={[ 5, 6 ]}>
    REACT ÖRNEK ŞABLON 2
  </Heading>
</Card>
      <Heading>{this.props.count}</Heading>
    </div>
  )
    }
}
const mapstatetoprops =(state)=>({
count:state.count


})
export default connect(mapstatetoprops)(About)