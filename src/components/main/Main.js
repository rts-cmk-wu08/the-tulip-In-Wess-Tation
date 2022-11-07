import Contact from "./contact/Contact"
import Rooms from "./rooms/Rooms"
import Services from "./services/Services"
import Spots from "./spots/Spots"
import Gallery from "./gallery/Gallery"
import Review from "./review/Review"
import "./main.css"

function Main() {
  return (
    <main className="main">
    <Contact />
    <Rooms />
    <Services /> 
    <Spots />
    <Gallery />
    <Review />
    </main>


  );  
}

export default Main;