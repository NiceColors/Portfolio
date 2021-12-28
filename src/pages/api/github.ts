import { NextApiRequest, NextApiResponse } from "next";

const github = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const data = await fetch("https://api.github.com/users/NiceColors/").then(
    (res) => res.json()
  );  
 res.json(data);

};

export default github;



