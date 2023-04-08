import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

// import Products from "../container/Products";

import Card from "../components/Card";
import Products from "../container/Products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setIsLoading(false);
        setProducts(json);
      });

    console.log(products);
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href={`/products`}>
          <button className="btn border-t-indigo-800">All Products</button>
        </Link>
        <Products products={products} />
      </main>
    </div>
  );
}
