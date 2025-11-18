import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/ui/PageTransition';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Work } from '../pages/Work';
import { Contact } from '../pages/Contact';
import { LoadingProvider, useLoading } from '../contexts/LoadingContext';
import { Loader } from '../components/ui/Loader';
import { HeroCanvas } from '../components/3d/HeroCanvas';

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
const AppRouterContent = () => {
  const { isLoading, progress } = useLoading();
  const location = useLocation();

  return (
    <>
      {/* Always render HeroCanvas on home route so LoadingTracker can run */}
      {location.pathname === '/' && <HeroCanvas />}
      
      <Loader progress={progress} active={isLoading} />
      
      {!isLoading && (
        <Layout>
          <AnimatedRoutes />
        </Layout>
      )}
    </>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AppRouterContent />
      </LoadingProvider>
    </BrowserRouter>
  );
};

