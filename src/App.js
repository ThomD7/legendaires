import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './pages/About';
import Error from './pages/Error';
import MembresDetails from './pages/MembresDetails';

function App() {
  return (
    <div className="App font-dmsans">
      <NavigationBar />
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/membre/:id" element={<MembresDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
