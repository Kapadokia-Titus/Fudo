import './App.css';
// import default style
import 'rsuite/dist/rsuite.min.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import {Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin';
import Order from './pages/Order';
import Popular from './pages/Popular';
import Recipe from './pages/Recipes';
import Discover from './pages/Discover';
import Users from './pages/Users';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/order' element={<Order />}/>
      <Route path='/discover' element={<Discover />}/>
      <Route path='/recipe' element={<Recipe />}/>
      <Route path='/popular' element={<Popular />}/>
      <Route path='/users' element={<Users />}/>
    </Routes>
    <Footer />
    </>
   
  );
}

export default App;
