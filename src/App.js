import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container">
      <Shop/>
     </div>
    </div>
  );
}

export default App;

// to instal and use redux
// npm i redux react-redux redux-thunk 