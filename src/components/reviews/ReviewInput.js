import React, { Component } from 'react';

class ReviewInput extends Component {

  state = { text: "" }

  handleReview = (e) => {
    this.setState({text: e.target.value})
  }

  submitReview = (e) => {
    e.preventDefault();
    this.props.addReview( {text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({text: ""});

  }


  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.submitReview}>
          <input 
            type="text" 
            placeholder='Write your Review here' 
            value = {this.state.text}
            onChange={this.handleReview}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
