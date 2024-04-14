import { Schema, model } from "mongoose"

const projectSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  project_name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  description: String,
  status: String,
  startDate: Date,
  endDate: Date,
  // (Additional fields as needed)
})

const Project = model("projects", projectSchema)

module.exports = {
  create(data = {}) {
    return new Project(data).save()
  },
}
