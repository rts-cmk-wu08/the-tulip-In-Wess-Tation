import Rooms from "./rooms/Rooms"
import Services from "./services/Services"
import Spots from "./spots/Spots"
import Gallery from "./gallery/Gallery"
import "./main.css"

function Main() {
  return (
    <main className="main">
    <Rooms />
    <Services /> 
    <Spots />
    <Gallery />
    </main>


  );  
}

export default Main;