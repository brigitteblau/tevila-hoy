import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import TevilaForm from './components/Form';
import ScrollToTop from './Scroll';
import Footer from './components/Footer';
import Join from './components/pages/JoinUs';
import Header from './components/Header';
//no creadas las rutas
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import StatusPage from './components/pages/Page';
import FAQ from './FAQ';
import Reparacion from './components/Reparacion';
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
                <Reparacion/>
              <HeroSection />
              <TevilaForm />
            </FooterLayout>
          }
        />
        <Route path="/success" element={<Layout> <StatusPage status="success" /> </Layout>} />
        <Route path="/failure" element={<Layout>
          <StatusPage status="failure" />
        </Layout>} />

        <Route path="/pending" element={<Layout> <StatusPage status="pending" /> </Layout>} />
        <Route path="/ser-parte" element={<Layout><Join /></Layout>} />
        <Route path="/terminos-y-condiciones" element={<Layout><Terms /></Layout>} />
     <Route path="/politica-de-privacidad" element={<Layout><Privacy/></Layout>} />
<Route path="/preguntas-frecuentes" element={<Layout><FAQ/></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
