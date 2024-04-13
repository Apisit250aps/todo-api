import { Schema, model } from "mongoose"

const attachmentSchema = new Schema({
  task_id: {
    type: Schema.Types.ObjectId,
    ref: "tasks"
  },
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "projects"
  },
  file_name: {
    type: String,
    required: true
  },
  file_path: {
    type: String,
    required: true
  },
  description: String
  // (Additional fields as needed)
})

const Attachment = model("attachment", attachmentSchema)

module.exports = {}