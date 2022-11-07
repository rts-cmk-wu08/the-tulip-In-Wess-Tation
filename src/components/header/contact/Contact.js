import { useState, useEffect } from "react";
import axios from "axios";
import "./contact.css";
import { IoRestaurantOutline } from "react-icons/io5"

const Contact = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [contact, setContact] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/spots")
    .then(response => {setContact(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);



return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && contact && (
            <>
            <article className="contact">
                    <div className="contact__form"> 
                       <input className="contact__inputBox" type="text" placeholder="Check In"/>
                       <input className="contact__inputBox" type="text" placeholder="Check Out"/>
                       <input className="contact__inputBox" type="text" placeholder="Adults"/>
                       <input className="contact__inputBox" type="text" placeholder="Children"/>
                       <button className="contact__btn">Book Now</button>
                    </div>
            </article>
            </>
        )}

    </section>
);
}

export default Contact