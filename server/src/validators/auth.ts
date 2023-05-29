import Joi from "joi";
import { EMAILS } from "../constants/regex";
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
    email: Joi.string().pattern(new RegExp(EMAILS)).required(),
    password: Joi.string().allow("").required(),
  },
};
