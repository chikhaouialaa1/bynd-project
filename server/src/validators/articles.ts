import Joi from "joi";
import { MONGODB_OBJECT_ID } from "../constants/regex";

export const read = {
  params: {
    _id: Joi.string().pattern(new RegExp(MONGODB_OBJECT_ID)).required(),
  },
};

export const _delete = {
  params: {
    _id: Joi.string().pattern(new RegExp(MONGODB_OBJECT_ID)).required(),
  },
};

export const create = {
  body: {
    name: Joi.string().allow("").required(),
    description: Joi.string().allow("").required(),
    author: Joi.string().allow("").required(),
  },
};

export const search = {
  body: {
    search: Joi.string().allow(""),
  },
};

export const update = {
  body: {
    name: Joi.string().allow(""),
    description: Joi.string().allow(""),
  },
};
