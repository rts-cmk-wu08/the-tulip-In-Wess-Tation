import { useState, useEffect } from "react";
import axios from "axios";
import "./rooms.css";

const Rooms = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [rooms, setRooms] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/rooms")
    .then(response => {setRooms(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);

rooms && console.log(rooms.roomtypes)

return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && rooms && (
            <>
            <h2 className="big-text center">{rooms.headline}</h2>
            <p className="medium-text center">{rooms.text}</p>
            <article className="rooms__cards">
                {rooms.roomtypes.map(room => (
                    <div className="rooms__card"> 
                        <img className="rooms__img" src={room.image} alt="the individual rooms" />
                        <p className="rooms__guests">{room.guests} Guests</p>
                        <p className="rooms__size">{room.size}</p>

                        <h3 className="rooms__type">{room.type}</h3>
                        <p className="rooms__price">${room.price}</p>
                        <p className="rooms__text">{room.description}</p>
                    </div>
                ))}
            </article>
            </>
        )}

    </section>
);
}

export default Rooms;