import Rooms from "./rooms/Rooms"
import Services from "./services/Services"
import Spots from "./spots/Spots"
import "./main.css"

function Main() {
  return (
    <main className="main">
    <Rooms />
    <Services /> 
    <Spots />
    </main>


  );  
}

export default Main;