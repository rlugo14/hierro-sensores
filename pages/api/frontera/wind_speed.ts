import type { NextApiRequest, NextApiResponse } from "next";
import { fetchWindData } from "../../../features/measures/api";
import { DataType, Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return fetchWindData(DataType.WIND_SPEED, Locations.FRONTERA)
    .then((singleValue) => {
      res.status(200).json(singleValue);
    })
    .catch((reason) => res.status(404).json(reason));
};
