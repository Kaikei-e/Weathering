import { NextApiRequest, NextApiResponse } from "next";

const checkHealth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/system/ping`);
  const data = await response.json();
  res.status(200).json(data);
}