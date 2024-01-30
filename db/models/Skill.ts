import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  seq: { type: Number, default: 1 },
  svgClass: { type: String, default: "" },
  title: { type: String, default: "" },
  list: { type: String, default: "" },
});

const Skill = mongoose.models["Skill"] || mongoose.model("Skill", SkillSchema);

export default Skill;
