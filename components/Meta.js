import Head from "next/head";
import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  keywords: "web development, programming",
  description: "Get the latest news in web dev",
};


export default Meta;
