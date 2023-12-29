import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default App;
