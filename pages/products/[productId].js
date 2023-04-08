import Image from "next/image";
import Comment from "../../container/Comment";
import { getCommentData } from "../api/comment";

export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.productId;

  const productData = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product = await productData.json();

  const commentData = await getCommentData();
  const serializedData = commentData.map((comment) => ({
    ...comment,
    _id: comment._id.toString(),
  }));

  console.log(product);
  return {
    props: {
      product,
      serializedData,
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

      <Comment />
    </>
  );
}
