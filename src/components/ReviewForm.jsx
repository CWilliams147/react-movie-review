import React, { useState } from "react";

function ReviewForm() {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle submitting the review data here
    console.log("Review submitted:", review);
    setReview("");
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={handleChange}
        placeholder="Write your review..."
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
