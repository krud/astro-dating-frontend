import React, { Component } from 'react'
import './Reset.css';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import UserPage from './components/UserPage'

export default class App extends Component {
  state = {
    horoscopes: [],
    user:{},
    userShowing: false
  }

  addUser = (name, sunsign) => {
    this.setState({
      user: {
        name,
        sunsign
      },
      userShowing:true 
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/horoscopes')
    .then(response => response.json())
    .then(result => {
      this.setState({
        horoscopes: result
      })

    })
  }

  render() {
    return (
      <div>
       <Header />
       { this.state.userShowing
          ? <UserPage horoscopes={this.state.horoscopes} user={this.state.user}/>
          : <MainContainer addUser={this.addUser}/>
       }
      </div>
    )
  }
}
