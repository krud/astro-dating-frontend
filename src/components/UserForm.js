import React, { Component } from 'react'
import '../App.css';

export default class UserForm extends Component {
    state = {
        name: "",
        sunsign: "",
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, sunsign } = this.state
        // this.props.addUser(name, birthday)
        this.props.addUser(name, sunsign)
    }

    // Date is in "1995-10-30" format
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={this.state.name}
                onChange={this.handleChange}
                required
                />
                <input 
                type="text" 
                name="sunsign"
                placeholder="Sun Sign" 
                value={this.state.sunsign}
                onChange={this.handleChange}
                required
                />
              {/* <input 
                type="date" 
                name="birthday"
                placeholder="Birthday Date" 
                value={this.state.birthday}
                onChange={this.handleChange}
                required
                /> */}
              <input 
                type="submit" 
                className="button"
                value="Submit"
                />
            </form>
        )
    }
}
