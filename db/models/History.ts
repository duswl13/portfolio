import mongoose from "mongoose";

// 내부 데이터의 스키마 정의
const dataSchema = new mongoose.Schema({
  months: {
    type: Number,
    required: true,
  },
  list: {
    type: [String],
    default: [],
  },
});

// 년도의 스키마 정의
const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  data: {
    type: [dataSchema],
    default: [],
  },
});

const History =
  mongoose.models["History"] || mongoose.model("History", yearSchema);

export default History;
