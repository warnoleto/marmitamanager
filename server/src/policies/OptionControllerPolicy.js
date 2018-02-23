const Joi = require('joi')

function validateSave (req, res, next) {
  const schema = {
    description: Joi.string().required().max(60),
    CategoryId: Joi.number().required()
  }

  // eslint-disable-next-line
    const { error, value } = Joi.validate(req.body, schema)

  if (error) {
    console.log(error)
    res.status(400).send({
      error: error.details[0].message,
      details: error.details[0]
    })
  } else {
    next()
  }
}

module.exports = {
  create: validateSave,
  update: validateSave
}
