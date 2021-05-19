const Joi = require('joi')

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(30).required()
})

const schemaUpdateContact = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(6).max(30)
})

const schemaStatusContact = Joi.object({
  favorite: Joi.boolean().required(),
})

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: 400,
      message: `Filed: ${message.replace(/"/g, '')}`
    })
  }
  next()
}

module.exports.createContact = (req, res, next) => {
  return validate(schemaCreateContact, req.body, next)
}

module.exports.updateContact = (req, res, next) => {
  return validate(schemaUpdateContact, req.body, next)
}

module.exports.validateStatusContact = (req, _res, next) => {
  return validate(schemaStatusContact, req.body, next)
}
