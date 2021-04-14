import type { NextApiRequest, NextApiResponse } from "next";
import { fetchSingleValueData } from "../../../features/measures/api";
import { DataType, Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetchSingleValueData(
    DataType.ACCUMULATED_RAIN,
    Locations.FRONTERA
  );

  res.status(200).json(response);
};
