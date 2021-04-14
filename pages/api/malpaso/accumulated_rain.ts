import type { NextApiRequest, NextApiResponse } from "next";
import { fetchSingleValueData } from "../../../features/measures/api";
import { DataType, Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return fetchSingleValueData(DataType.ACCUMULATED_RAIN, Locations.MALPASO)
    .then((singleValue) => {
      res.status(200).json(singleValue);
    })
    .catch((reason) => res.status(404).json(reason));
};
