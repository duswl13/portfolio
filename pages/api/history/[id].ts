import dbConnect from "@/db/dbConnect";
import History from "@/db/models/History";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const history = await History.findById(id);
      res.send(history);
      break;
    case "PATCH":
      const updatedHistory = await History.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedHistory);
      break;
    case "DELETE":
      await History.findByIdAndDelete(id);
      res.send(200);
      break;
  }
}
