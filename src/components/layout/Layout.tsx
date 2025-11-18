import { ReactNode } from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../ui/Footer';
import { CustomCursor } from '../ui/CustomCursor';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout component
 * Wraps all pages with navbar, footer, cursor, and smooth scroll
 */
export const Layout = ({ children }: LayoutProps) => {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

