import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel