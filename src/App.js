import "bootstrap/dist/css/bootstrap.min.css"
import MainComponent from './MainComponent.jsx';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import { Store} from "./redux/Store.js";



function App() {
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
      </Provider>
    
   
    </div>
  );
}

export default App;
