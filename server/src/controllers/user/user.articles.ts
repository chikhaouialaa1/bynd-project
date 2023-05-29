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

export const search = [
  validateRequestData(validators.search),
  async (req: any, res: any) => {
    const match: any = {};
    const { search } = req.body;
    try {
      if (search) {
        const result = await Article.find({
          $or: [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { author: { $regex: search, $options: "i" } },
          ],
        });
        return respond.success({ res, data: result });
      }
    } catch (error) {
      return respond.badRequest({ res, data: error });
    }
  },
];
