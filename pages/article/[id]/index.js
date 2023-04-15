import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await response.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: false,
  };
};
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/" as={`/`}>
        Go Back
      </Link>
    </div>
  );
};
// export const getServerSideProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await response.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await response.json();
  return {
    props: {
      article,
    },
  };
};

export default article;
