import Image from "next/image";
import Link from "next/link";

export default function Card(product) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <Link href={`/products/${product.product.id}`}>
        <figure>
          <Image src={product.product.image} width="200px" height="300px" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          {product.product.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.product.category}</div>
          <div className="badge badge-outline">{product.product.price}</div>
        </div>
      </div>
    </div>
  );
}
