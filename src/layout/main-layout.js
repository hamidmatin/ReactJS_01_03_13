import React, { Fragment } from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main style={{maxWidth: '1100px', margin: 'auto'}}>{children}</main>
      <Footer />
    </Fragment>
  );
};
