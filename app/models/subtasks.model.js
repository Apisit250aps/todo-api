import { Schema, model } from "mongoose"

const subtaskSchema = new Schema({
  task_id: {
    type: Schema.Types.ObjectId,
    ref: "tasks"
  },
  sub_task_name: {
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

const subTask = model("subtasks", subtaskSchema)

export default {
  
}
