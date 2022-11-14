import { useState, useEffect } from "react";
import axios from "axios";
import "./gallery.css";

const Gallery = () => {//sfc
    const [loading, setLoading] = useState(true);//usf
    const [error, setError] = useState();//usf
    const [gallery, setGallery] = useState();//usf

useEffect(() => {//uef
    axios("http://localhost:4000/gallery")
    .then(response => {setGallery(response.data)})
    .catch(() => setError("Something went wrong"))
    .finally(() => setLoading(false))

}, []);

gallery && console.log(gallery.url)

return (
    <section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && gallery && (
            <>
            <article className="gallery">
                <h1 className="big-text center">{gallery.headline}</h1>
                <p className="medium-text center">{gallery.text}</p>
                <div className="grid">
                    {gallery.images.map(galleries => (
                        <img key={galleries.id} className={`gallery__img grid__${galleries.id}`} src={galleries.url} alt="gallery pictures" />
                    ))}
                </div>
            </article>
            </>
        )}

    </section>
);
}

    const ids = [
        {id: "81", grid: "zero"},
        {id: "82", grid: "one"},
        {id: "83", grid: "three"},
        {id: "84", grid: "four"},
        {id: "85", grid: "five"},
        {id: "86", grid: "six"}
    ]



export default Gallery;