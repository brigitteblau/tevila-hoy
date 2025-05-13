// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import TevilaForm from './components/Form';
import SuccessPage from './components/SuccesPage';
import Failure from './components/Failure';
import Pending from './components/Pending';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={
              <>
              <HeroSection />
          <TevilaForm />
          </>
          } />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/pending" element={<Pending />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
