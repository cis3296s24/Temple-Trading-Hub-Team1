import React from 'react';
import styles from '../../styles/ProductPage.module.css';

interface ProductPageProps {
  productId: string;
  imageUrl: string; // Add the imageUrl prop
}

const ProductPage: React.FC<ProductPageProps> = ({ productId, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.productTitle}>
        <h1>Product:{productId}</h1>
      </div>
      <div className={styles.productContent}>
        <img src={imageUrl} alt="Product Image" />
        <h2>{productId}</h2>
        {/* Add more components to display product details */}
      </div>
    </div>
  );
};

export default ProductPage;
