import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import CartoonSearch from './components/CartoonSearch';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cartoonSearch' element={<CartoonSearch />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
