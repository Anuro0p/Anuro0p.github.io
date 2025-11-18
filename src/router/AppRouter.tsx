import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/ui/PageTransition';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Work } from '../pages/Work';
import { Contact } from '../pages/Contact';

/**
 * Router component with page transitions
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
};

/**
 * Main app router
 * Sets up React Router with BrowserRouter
 */
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
};

