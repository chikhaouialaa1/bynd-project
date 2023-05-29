import { Article } from "../../models/admins.articles";
import { respond } from "../../utils/responder";
import { validateRequestData } from "../../utils/validators";
import * as validators from "../../validators/articles";

export const list = [
  async (req: any, res: any) => {
    try {
      const articles = await Article.find({});
      return respond.success({ res, data: articles });
    } catch (e) {
      return respond.notFound({ res, data: e });
    }
  },
];

export const read = [
  validateRequestData(validators.read),
  async (req: any, res: any) => {
    const { _id } = req.params;
    try {
      const article = await Article.findOne({ _id });
      if (article) {
        return respond.success({ res, data: article });
      } else {
        respond.notFound(res);
      }
    } catch (e) {
      return respond.notFound({ res, data: e });
    }
  },
];
