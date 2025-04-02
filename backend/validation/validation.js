
const Joi = require('joi');

const schema=new Joi.object({
    username:Joi.string().alphanum().min(6).required(),
    password:Joi.string().alphanum().min(8).required(),
})

module.exports=schema;