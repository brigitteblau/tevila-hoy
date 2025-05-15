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
import Join from './components/pages/JoinUs';
import Header from './components/Header';
//no creadas las rutas
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';


const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

const FooterLayout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

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

  if (loading) return <Loader />;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <FooterLayout>
              <HeroSection />
              <TevilaForm />
            </FooterLayout>
          }
        />
        <Route path="/success" element={<Layout><SuccessPage /></Layout>} />
        <Route path="/failure" element={<Layout><Failure /></Layout>} />
        <Route path="/pending" element={<Layout><Pending /></Layout>} />
        <Route path="/ser-parte" element={<Layout><Join /></Layout>} />
        <Route path="/terminos-y-condiciones" element={<Layout><Terms /></Layout>} />
     <Route path="/politica-de-privacidad" element={<Layout><Privacy/></Layout>} />

      </Routes>
    </Router>
  );
};

export default App;
