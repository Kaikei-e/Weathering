import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const checkHealth = async (req: NextApiRequest, res: NextApiResponse) => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/system/ping`
  // );
  // const data = await response.json();
  // res.status(200).json(data);

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/system/ping`
  );
  res.status(200).json(response.data);
};

export default checkHealth;
