import Link from "next/link";
import Card from "../components/Card";

export default function Products({ products }) {
  // console.log(products);
  return (
    <div className="flex justify-between align-middle flex-wrap">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
}
