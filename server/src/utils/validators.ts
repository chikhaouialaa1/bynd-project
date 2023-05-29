import Joi from "joi";
import { respond } from "./responder";

const validateRequestData = (validators: any) => {
  return (req: any, res: any, next: any) => {
    const { body, params } = req;
    if (validators.params) {
      const validateSchema = Joi.object().keys(validators);
      const validation = validateSchema.validate(
        { params },
        { abortEarly: false }
      );
      if (validation.error) {
        respond.badRequest({ res, data: validation.error });
        return;
      } else {
        req.validateParams = params;
      }
    }
    if (validators.body) {
      const validateSchema = Joi.object().keys(validators);
      const validation = validateSchema.validate(
        { body },
        { abortEarly: false }
      );
      if (validation.error) {
        respond.badRequest({ res, data: validation.error });
        return;
      } else {
        req.validateBody = body;
      }
    }
    return next();
  };
};

export { validateRequestData };
