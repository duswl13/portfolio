import dbConnect from "@/db/dbConnect";
import Skill from "@/db/models/Skill";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  console.log(Skill);
  switch (req.method) {
    case "POST":
      const newSkill = await Skill.create(req.body);
      console.log(newSkill);
      console.log(req.body);
      res.status(201).send(newSkill);
      break;
    case "GET":
      const Skills = await Skill.find();
      res.send(Skills);
      break;
  }
}
