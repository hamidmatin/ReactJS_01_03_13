import React from 'react';
import { BasePage } from '../../components/base-page/base-page';
import { Container } from '../../components/container';

export const HomePage = () => {
  return (
    <Container>
      
      <BasePage title={'Home'}>
        <h2>React Case Study</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit pariatur similique eos!
          Quae quam perferendis repellendus suscipit qui libero voluptatem! Earum adipisci excepturi
          enim placeat officia esse, sit eos neque!
        </p>
      </BasePage>
    </Container>
  );
};
