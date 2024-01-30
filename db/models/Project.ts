import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  seq: { type: Number, default: 1 },
  badgeList: { type: String, default: "" },
  title: { type: String, default: "" },
  agency: { type: String, default: "" },
  startDate: { type: String, default: "" },
  endDate: { type: String, default: "" },
  about: { type: String, default: "" },
  imgUrl: { type: String, default: "" },
  webUrl: { type: String, default: "" },
  androidUrl: { type: String, default: "" },
  iosUrl: { type: String, default: "" },
});

const Project =
  mongoose.models["Project"] || mongoose.model("Project", ProjectSchema);

export default Project;
