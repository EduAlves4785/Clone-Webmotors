 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Estoque from "./Pages/Estoque";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/estoque' element={<Estoque/>}/>
      </Routes>
    </Router>
  );
}

export default App;
