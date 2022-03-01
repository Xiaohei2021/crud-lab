import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = { text: "" }

  handleChange=(e)=>{
    this.setState({text: e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder='Enter the name of the Restaurant'
            value={this.state.text}
            onChange={this.handleChange} />
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
