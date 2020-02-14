import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import Card from './Components/PlayerCard';
import AddPlayerForm from "./Components/AddPlayerForm"
// import { response } from 'express';  ....??? where did this even come from wtf
import useLocalstorage from "./hooks/useLocalStorage"
// import { response } from 'express'; .. I DEMAND YOU TO STOP IMNPORTING THIS
// import { response } from 'express';  ... STOP
import styled from "styled-components"

const Container= styled.div`
margin-left:10%;
height:150vh;
width:150%;

`

class App extends Component{
  constructor(){
    super();
    this.state={
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    
    .then(response=>{
      console.log(response)
      this.setState({data:response.data})
      // .catch(error=>{
      //   console.log('ya messed up', error)
      // })
    })
   }

   


  render(){
    return (
      <div className="App">
        <h1>World Cup Players</h1>
        {/* Need card component here */}
        <AddPlayerForm/>
        <Container>
        <Card players={this.state.data}/>
        </Container>
        
   
    
      </div>
    );
  }
}

export default App;
