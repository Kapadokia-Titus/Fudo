
import './App.css';
// import default style
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import NavBar from './components/navbar';
import Home from './pages/home';


function App() {
  return (
    <>
    <NavBar />
    <Home/>
    </>
   
  );
}

export default App;
