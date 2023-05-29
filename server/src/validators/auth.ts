import Joi from "joi";

export const signin = {
  body: {
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
};

// add regex
export const register = {
  body: {
    firstname: Joi.string().allow("").required(),
    lastname: Joi.string().allow("").required(),
    email: Joi.string().allow("").required(),
    password: Joi.string().allow("").required(),
  },
};
