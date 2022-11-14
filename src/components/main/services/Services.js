import { useState, useEffect } from "react";
import axios from "axios";
import "./services.css";

const Services = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [services, setServices] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/services")
    .then(response => {setServices(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);

services && console.log(services.facilities)

return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && services && (
            <>
            <h2 className="big-text center">{services.headline}</h2>
            <p className="medium-text center">{services.text}</p>
            <article className="service">
                {services.facilities.map(service => (
                    <div className="service__flex"> 
                        <img className="service__img" src={service.image} alt="Room images" />
                        <div className="text">
                            <h2 className="service__headline">{service.name}</h2>
                            <p className="service__text1">{service.text1}</p>
                            <p className="service__text2">{service.text2}</p>
                        </div>
                    </div>
                ))}
            </article>
            </>
        )}

    </section>
);
}

export default Services;