import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAllData } from "../../../features/measures/api";
import { Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetchAllData(Locations.TIMIJIRAQUE);

  res.status(200).json(response);
};
