import Joi from 'joi'

export const validateAddingNewProduct = (body) => {
    const validAddingProductSchema = Joi.object({
        productName: Joi.string().required(),
        productPrice: Joi.number().positive().required(),
        quantity: Joi.number().min(1).required(),
    })

    return validAddingProductSchema.validate(body)
}