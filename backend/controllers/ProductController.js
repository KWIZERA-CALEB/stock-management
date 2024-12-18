import ProductModel from "../models/ProductModel.js";
import _ from 'lodash'
import { validateAddingNewProduct } from "../validators/validateproduct.js";


export const addNewProduct = async (req, res) => {
    try {
        const productInfo = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            quantity: req.body.quantity
        }

        const validateUserInput = await validateAddingNewProduct(_.pick(productInfo, ["productName", "productPrice", "quantity"]))
        if (validateUserInput.error) {
            return res.status(400).json({
                "status": 400,
                "error": validateUserInput.error.details[0].message
            });
            
        }

        const newProduct = await ProductModel.create(productInfo)
        if (!newProduct) {
            return res.status(400).json({
                "status": 400,
                "error": "Product Not Added"
            });
        } else {
            return res.status(201).json({
                "status": 201,
                "message": "Product Added"
            });
        }
    } catch(error) {
        res.status(500).json({
            "status": 500,
            "error": "An error occurred"
        })
        throw error
    }
}

export const fetchProducts = async(req, res) => {
    try {
        const products = await ProductModel.find().sort({ createdAt: -1 });
        if (!products) {
            return res.status(400).json({
                "status": 400,
                "error": "Failed to fetch products"
            });
        } else {
            return res.status(200).json({
                "status": 201,
                "products": products,
            });
        }
    } catch(error) {
        res.status(500).json({
            "status": 500,
            "error": "An error occurred"
        })
        throw error
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const deleteProduct = await ProductModel.findByIdAndDelete(productId)
        if (!deleteProduct) {
            return res.status(400).json({
                "status": 400,
                "error": "Failed to delete product"
            });
        } else {
            return res.status(200).json({
                "status": 200,
                "message": "Product Deleted",
            });
        }
    } catch(error) {
        res.status(500).json({
            "status": 500,
            "error": "An error occurred"
        })
        throw error
    }
}