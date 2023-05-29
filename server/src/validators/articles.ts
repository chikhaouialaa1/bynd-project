import Joi from "joi";

export const read = {
  params: {
    _id: Joi.string().allow("").required(),
  },
};

export const _delete = {
  params: {
    _id: Joi.string().allow("").required(),
  },
};

export const create = {
  body: {
    name: Joi.string().allow("").required(),
    description: Joi.string().allow("").required(),
    author: Joi.string().allow("").required(),
  },
};

export const update = {
  body: {
    name: Joi.string().allow(""),
    description: Joi.string().allow(""),
  },
};
