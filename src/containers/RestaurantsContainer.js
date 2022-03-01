import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRest} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.delRest}/>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return{
    restaurants: state.restaurants
  }
}
const mapDispatchToProps=(dispatch)=> {
  return {
    addRest: text => dispatch({type: "ADD_RESTAURANT", text}),
    delRest: id => dispatch({type:"DELETE_RESTAURANT", id})
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
