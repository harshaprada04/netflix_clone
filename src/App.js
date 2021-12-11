import './App.css';
import NavBar from './Nav-Bar/NavBar';
import Routing from './Nav-Bar/Routing';
import {ContextProvider} from "./Page/Context/Context";


function App() {
  
  return (
    <div>
    <ContextProvider>
    <div className="app">
    <NavBar />
    <Routing />
    </div>
    </ContextProvider>
    </div>
  );
}


export default App;
