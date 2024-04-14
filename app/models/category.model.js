import { Schema, model } from "mongoose"

const categorySchema = new Schema({
  category_name: {
    type: String,
    required: true
  },
  description: String
  // (Additional fields as needed)
})

const Category = model("category", categorySchema)

export default {}