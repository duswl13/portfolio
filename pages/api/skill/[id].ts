import dbConnect from "@/db/dbConnect";
import Skill from "@/db/models/Skill";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const skill = await Skill.findById(id);
      res.send(skill);
      break;
    case "PATCH":
      const updatedSkill = await Skill.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedSkill);
      break;
    case "DELETE":
      await Skill.findByIdAndDelete(id);
      res.send(200);
      break;
  }
}
