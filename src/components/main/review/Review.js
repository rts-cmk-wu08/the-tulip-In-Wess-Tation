import { useState, useEffect } from "react";
import axios from "axios";
import "./review.css";

const Review = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [reviews, setReviews] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/reviews")
    .then(response => {setReviews(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);



return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && reviews && (
            <>
            <article className="reviews">
                <h1 className="big-text center">{reviews.headline}</h1>
                <p className="medium-text center">{reviews.text}</p>
                <div className="review__cards center">
                {reviews.testimonials.map(review => (
                    <div className="review__card">
                    <p className="review__text">{review.text}</p>
                    <img className="review__img" src={review.imageUrl} alt="review pictures" />
                    <p className="review__name">{review.name}</p>
                    <p className="review__handlename">{review.handle}</p>
                    </div>
                ))}
                </div>
            </article>
            </>
        )}

    </section>
);
}

export default Review;