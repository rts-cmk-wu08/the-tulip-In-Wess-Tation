import { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import logo from "../../thetuliplogo.svg";


const Hero = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [hero, setHero] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/hero")
    .then(response => {setHero(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);

return (
    <header className="hero">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && hero && (
            <>
        <img className="hero__img" src={hero.image} alt="Hero billede af hotel" />
        <img src={logo} className="hero-logo" alt="logo" />
        <h1 className="hero__headline">{hero.headline}</h1>
        <button className="hero__btn">Book Now</button>
            </>
        )}

    </header>
);
}

export default Hero;