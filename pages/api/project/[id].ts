import dbConnect from "@/db/dbConnect";
import Project from "@/db/models/Project";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const project = await Project.findById(id);
      res.send(project);
      break;
    case "PATCH":
      const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedProject);
      break;
    case "DELETE":
      await Project.findByIdAndDelete(id);
      res.send(200);
      break;
  }
}
