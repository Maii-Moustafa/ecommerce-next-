import Image from "next/image";
import Comment from "../../container/Comment";

export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.productId;

  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();

  console.log(product);
  return {
    props: {
      product,
    },
  };
}

export default function Product(props) {
  const { product } = props;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={product.image} width="200px" height="300px" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <Comment/>
    </>
  );
}
