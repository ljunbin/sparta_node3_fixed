const joi = require('joi');

const re_nickname = /^[a-zA-Z0-9]{3,10}$/;
const re_password = /^[a-zA-Z0-9]{4,30}$/;

exports.userSchema = joi.object({
    username: joi.string().pattern(re_nickname).required(),
    password: joi.string().pattern(re_password).required(),
    confirm: joi.string(),
  });