import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import TevilaForm from './components/Form';
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
        <>
          <HeroSection />
          <TevilaForm />
        </>
      )}
    </div>
  );
};

export default App;
