import { NextApiRequest, NextApiResponse } from "next";

const github = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({});
};

export default github;
