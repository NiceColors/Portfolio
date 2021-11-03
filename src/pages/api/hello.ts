// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GetStaticProps, NextApiRequest, NextApiResponse } from "next";

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

export default hello;


export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const data = await fetch("https://api.github.com/users/NiceColors").then(
    (res) => res.json()
  );

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dados: data,
    },
  };
};
