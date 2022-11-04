import { useState, useEffect } from "react";
import axios from "axios";
import "./footer.css";
import logo from "../../thetuliplogo.svg";


const Footer = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [footer, setFooter] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/hero")
    .then(response => {setFooter(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);

return (
    <header className="footer">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && footer && (
            <>
            <div className="contact">
            <img src={logo} className="footer-logo" alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <input className="footer__input" type="text" placeholder="You email address"/>
            </div>
            <div className="services">
                <h2>Services</h2>
                <p>Restaurat</p>
                <p>Coffee Shop</p>
                <p>Car Wash</p>
                <p>Cycle Rent</p>
                <p>Car Rent</p>
            </div>
            <div className="reachUs">
                <h2>Reach Us</h2>
                <p>Mail@hotel.us</p>
                <p>(239) 555-0108</p>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            </>
        )}

    </header>
);
}

export default Footer;