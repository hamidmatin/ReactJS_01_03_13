import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const MainLayout = ({ children }) => {
  return (
    <HelmetProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </HelmetProvider>
  );
};
