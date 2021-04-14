import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAllData } from "../../../features/measures/api";
import { Locations } from "../../../models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const resp = await fetchAllData(Locations.MALPASO)
    .then((allData) => {
      res.status(200).json(allData);
    })
    .catch((reason) => {
      res.status(404).json(reason);
    });
};
