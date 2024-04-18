import React from 'react';
import styles from '../../styles/ProductPage.module.css';

interface ProductPageProps {
  productId: string;
  imageUrl: string;
  description: string; // Add the description prop
  userEmail: string; // Add the userEmail prop
  price: string; // Add the price prop
}

function ProductPage({ params }: { params: ProductPageProps }) {
  const decodedProductName = decodeURIComponent(params.productId);

  return (
    <div className={styles.container}>
      <div className={styles.productTitle}>
        <h1>Product: {decodedProductName}</h1>
      </div>
      <div className={styles.productContent}>
        <img src={params.imageUrl} alt="Product Image" className={styles.productImage} />
        <p className={styles.productDetails}>Price: {params.price}</p>
        <p className={styles.productDetails}>Description: {params.description}</p>
        <p className={styles.productDetails}>Seller Email: {params.userEmail}</p>
        {/* Add more components to display product details */}
      </div>
    </div>
  );
}

export default ProductPage;