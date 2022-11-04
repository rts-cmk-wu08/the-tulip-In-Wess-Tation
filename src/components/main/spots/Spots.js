import { useState, useEffect } from "react";
import axios from "axios";
import "./spots.css";

const Spots = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [spots, setSpots] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/spots")
    .then(response => {setSpots(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);



return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && spots && (
            <>
            <article className="spot__cards">
                {spots.map(spot => (
                    <div className="spot__card"> 
                        <div className="cirkel">{spot.icon}</div>
                        <h2 className="spot__headline">{spot.name}</h2>
                        <p>{spot.text}</p>
                    </div>
                ))}
            </article>
            </>
        )}

    </section>
);
}

export default Spots;