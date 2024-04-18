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

// *****************************

// Import necessary React and Next.js components and hooks
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/ProductPage.module.css';

// TypeScript interface for the product page properties
interface ProductPageProps {
    productId: string;
    imageUrl: string;
    description: string;
    userEmail: string;
    price: string;
}

// The ProductPage component definition
const ProductPage: NextPage<ProductPageProps> = ({ productId, imageUrl, description, userEmail, price }) => {
    const decodedProductName = decodeURIComponent(productId);

    return (
        <div className={styles.container}>
            <div className={styles.productTitle}>
                <h1>Product: {decodedProductName}</h1>
            </div>
            <div className={styles.productContent}>
                <img src={imageUrl} alt="Product Image" className={styles.productImage} />
                <p className={styles.productDetails}>Price: {price}</p>
                <p className={styles.productDetails}>Description: {description}</p>
                <p className={styles.productDetails}>Seller Email: {userEmail}</p>
            </div>
        </div>
    );
}

// The getServerSideProps function to fetch data for the page
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { productId } = context.params as { productId: string };
    // Assume you have a method to fetch product details based on the productId
    // This example uses a placeholder fetchProductById function you would replace with your actual data fetching logic
    const productData = await fetchProductById(productId);
    return {
        props: {
            productId: productData.productId,
            imageUrl: productData.imageUrl,
            description: productData.description,
            userEmail: productData.userEmail,
            price: productData.price,
        }
    };
};

// A mock function to simulate fetching product data by ID (replace with your actual data fetching function)
async function fetchProductById(productId: string) {
    // Your actual fetch logic here, for example:
    // const response = await fetch(`https://your-api/products/${productId}`);
    // const product = await response.json();
    // return product;

    // Placeholder return for demonstration
    return {
        productId,
        imageUrl: "https://example.com/path/to/image.jpg",
        description: "This is a sample product description.",
        userEmail: "seller@example.com",
        price: "100.00"
    };
}

export default ProductPage;
