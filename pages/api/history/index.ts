import dbConnect from "@/db/dbConnect";
import History from "@/db/models/History";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  console.log(History);
  switch (req.method) {
    case "POST":
      const newHistory = await History.create(req.body);
      console.log(newHistory);
      console.log(req.body);
      res.status(201).send(newHistory);
      break;
    case "GET":
      const historys = await History.find();
      res.send(historys);
      break;
  }
}
