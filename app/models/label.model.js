import { Schema, model } from "mongoose"

const labelSchema = new Schema({
  label_name: {
    type: String,
    required: true,
  },
  description: String,
  // (Additional fields as needed)
})

const Label = model("label", labelSchema)

export default {}
