import { useParams } from 'react-router-dom';
import React from 'react';

const ProductDetail = () => {
  const { productId } = useParams();
  return (
    <section>
      <h1>The Products Page</h1>
      <p>{productId}</p>
    </section>
  );
};

export default ProductDetail;
