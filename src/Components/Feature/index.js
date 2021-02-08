import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Oferta del dia</h1>
      <p>50% de descuento en la segunda compra de una hamburguesa el Pistolero</p>
      <FeatureButton>Comprar ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
