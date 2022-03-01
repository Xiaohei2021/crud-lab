import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const allReviews = restReviews.map((review,idx)=>{ return <Review key={idx} deleteReview={deleteReview} review={review}/>})

    return (
      <ul>
        Reviews
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;