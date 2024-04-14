import { Schema, model } from "mongoose"

const taskSchema = new Schema({
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    require: true
  },
  task_name: {
    type: String,
    required: true
  },
  label: {
    type: Schema.Types.ObjectId,
    ref: "label"
  },
  description: String,
  status: String,
  startDate: Date,
  endDate: Date
  // (Additional fields as needed)
})

const Task = model("tasks", taskSchema)

export default {
  
}