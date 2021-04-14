import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTemperature } from "../../../features/measures/api";
import { Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return fetchTemperature(Locations.LA_DEHESA)
    .then((singleValue) => {
      res.status(200).json(singleValue);
    })
    .catch((reason) => res.status(404).json(reason));
};
