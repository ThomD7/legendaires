// src/App.js
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './pages/About';
import Error from './pages/Error';
import MembresDetails from './pages/MembresDetails';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { fetchFaviconUrl } from './services/clanService';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const routeVariants = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1
    }
  };

  const setFavicon = (url) => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
        link.href = url;
    } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = url;
        document.head.appendChild(newLink);
    }
  };

  useEffect(() => {
    const updateFavicon = async () => {
        try {
            const faviconUrl = await fetchFaviconUrl();
            setFavicon(faviconUrl);
        } catch (error) {
            console.error('Error fetching favicon:', error);
        }
    };

    updateFavicon();
  }, []);

  return (
    <div className="App font-dmsans m-auto">
      <AnimatePresence mode='wait'>
        <motion.div
          variants={routeVariants}
          initial="initial"
          animate="final"
        >
          <NavigationBar />
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/#membres" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/membre/:id" element={<MembresDetails />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
