import dbConnect from "@/db/dbConnect";
import Project from "@/db/models/Project";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  console.log(Project);
  switch (req.method) {
    case "POST":
      const newProject = await Project.create(req.body);
      console.log(newProject);
      console.log(req.body);
      res.status(201).send(newProject);
      break;
    case "GET":
      const projects = await Project.find();
      res.send(projects);
      break;
  }
}
