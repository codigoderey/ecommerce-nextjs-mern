import mongoose from "mongoose"
const {String, Number} =  mongoose.Schema.Types
import shortid from "shortid"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price:{
        type: Number,
        required: true,
    },

    sku: {
        type: Number,
        unique: true,
        default: shortid.generate()
    },

    description:{
        type: String,
    },

    mediaUrl:{
        type: String,
        required: true,
    }
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)