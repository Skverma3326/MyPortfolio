import './App.css';
import Login from './components/common/Login';
import Hero from './components/homePage/Hero';
import Navbar from './components/homePage/Navbar';
function App() {
  return (
    <div className="App p-4">
     <Navbar/>
     <Hero/>
     </div>
  );
}

export default App;
