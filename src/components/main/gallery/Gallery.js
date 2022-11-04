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
            <article className="">
                {gallery.images.map(galleries => (
                    <div className="gallery__images"> 
                    <img className="gallery__img" src={galleries.url} alt="gallery pictures" />
                    </div>
                ))}
            </article>
            </>
        )}

    </section>
);
}

export default Gallery;