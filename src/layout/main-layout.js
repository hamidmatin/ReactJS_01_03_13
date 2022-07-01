import React, { Fragment } from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
