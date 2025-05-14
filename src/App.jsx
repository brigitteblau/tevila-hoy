import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import TevilaForm from './components/Form';
import SuccessPage from './components/SuccesPage';
import Failure from './components/Failure';
import Pending from './components/Pending';
import ScrollToTop from './Scroll';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', true);
      }, 2000);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <TevilaForm />
                </>
              }
            />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/pending" element={<Pending />} />
          </Routes>
          <Footer /> {/* 👈 Ahora el Footer solo se muestra cuando termina el loader */}
        </Router>
      )}
    </div>
  );
};

export default App;
