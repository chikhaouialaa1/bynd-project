import { Admin } from "../../models/admins";
import {
  encryptPassword,
  decryptPassword,
  generateToken,
} from "../../utils/auth";
import { respond } from "../../utils/responder";

import * as validators from "../../validators/auth";
import { validateRequestData } from "../../utils/validators";

export const signin = [
  validateRequestData(validators.signin),
  async (req: any, res: any) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      const isAuthenticated = await decryptPassword(
        password,
        admin?.password || ""
      );
      if (isAuthenticated) {
        let tokenData = {
          adminId: admin?._id,
          email: admin?.email,
        };
        const token = await generateToken(tokenData);
        respond.success({ res, data: { accesstoken: token } });
      } else {
        respond.notFound({ res });
      }
    } catch {
      respond.unauthorized({ res });
    }
  },
];

export const register = [
  validateRequestData(validators.register),
  async (req: any, res: any) => {
    const { firstname, lastname, password, email } = req.body;
    const oldAccounts = await Admin.find({ email });
    try {
      if (oldAccounts.length < 1) {
        const cryptedPassword = encryptPassword(password);
        try {
          const admin = await Admin.create({
            firstname,
            lastname,
            password: cryptedPassword,
            email,
            created_at: new Date(Date.now()),
          });
          let tokenData = {
            adminId: admin._id,
            email: admin.email,
          };
          const token = await generateToken(tokenData);
          respond.created({ res, data: { accesstoken: token } });
        } catch (e) {
          respond.badRequest({ res });
        }
      } else {
        respond.badRequest({ res, data: "Account already exist" });
      }
    } catch (e) {
      respond.badRequest({ res, data: `Error ${e}` });
    }
  },
];

export const me = [
  async (req: any, res: any) => {
    if (req.user.adminId) {
      try {
        const user = await Admin.findOne({ _id: req.user.adminId });
        if (user) {
          const { _id, firstname, lastname, email } = user;
          return respond.success({
            res,
            data: {
              _id,
              firstname,
              lastname,
              email,
            },
          });
        } else {
          respond.notFound(res);
        }
      } catch (e) {
        return respond.notFound({ res, data: e });
      }
    } else {
      return respond.notFound({ res });
    }
  },
];
