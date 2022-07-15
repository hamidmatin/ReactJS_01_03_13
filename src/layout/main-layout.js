import React from 'react';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeChangeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <HelmetProvider>
      <div className={theme}>
        <Header onThemeChange={themeChangeHandler} />
        <main>{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
