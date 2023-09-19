import "bootstrap/dist/css/bootstrap.min.css"
import MainComponent from './MainComponent.jsx';
import { BrowserRouter } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
   
    </div>
  );
}

export default App;
