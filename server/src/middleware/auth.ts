// @ts-ignore
import jwt from "jsonwebtoken";

import { bearerAuthRegexp } from "../constants/auth";
import { respond } from "../utils/responder";

export const checkToken = async (req: any, res: any, next: any) => {
  const auth = req.headers["authorization"] || "";
  const result = bearerAuthRegexp?.exec(auth);
  if (result) {
    try {
      const accessToken = result[1];
      const tokenData = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
      const { adminId, email } = tokenData;
      req.user = { adminId, email };
      if (tokenData && accessToken) return next();
      else respond.forbidden(res);
    } catch (e) {
      res.status(400).send({
        error: e,
      });
    }
  } else {
    respond.forbidden({ res });
  }
};
