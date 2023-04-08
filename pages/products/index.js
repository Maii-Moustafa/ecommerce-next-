import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../../components/Card";
import Products from "../../container/Products";

export default function ProductList() {
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

    // console.log(products);
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <Products products={products} />
    </>
  );
}
