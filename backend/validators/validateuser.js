import Joi from 'joi'

export const validateAddingNewManager = (body) => {
    const validManagerRegistrationSchema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8),
    })
    return validManagerRegistrationSchema.validate(body)
}