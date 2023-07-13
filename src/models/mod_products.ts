import mongoose,  { Schema } from "mongoose";


const productSchema: Schema = new Schema ({
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ['electronics', 'grocery_store'] }
}, { collection: 'products' })

export default mongoose.model('Products', productSchema)