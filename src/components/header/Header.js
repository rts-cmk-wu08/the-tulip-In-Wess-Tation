import { useState, useEffect } from "react";
import "./header.css";
import axios from "axios";

const Hero = () => {
    const [hero, setHero] = useState();

useEffect(() => {
    axios("http://localhost:4000/hero")
    .then(response => {setHero(response.data)})

}, []);

return (
    <header>
        <img src={hero.image} alt="Hero billede af hotel" />
        <h1>{hero.headline}</h1>


    </header>
);
}

export default Hero;