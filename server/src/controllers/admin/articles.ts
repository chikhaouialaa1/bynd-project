import { Article } from "../../models/admins.articles";
import { respond } from "../../utils/responder";
import { validateRequestData } from "../../utils/validators";
import * as validators from "../../validators/articles";

export const list = [
  async (req: any, res: any) => {
    try {
      const { adminId } = req.user;
      const articles = await Article.find({ adminId });
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

export const create = [
  validateRequestData(validators.create),
  async (req: any, res: any) => {
    try {
      const { adminId } = req.user;
      const { name, description, author } = req.validateBody;
      const article = await Article.create({
        name,
        description,
        author,
        adminId,
        created_at: new Date(Date.now()),
      });
      return respond.created({ res });
    } catch (e) {
      return respond.notFound({ res, data: e });
    }
  },
];

export const update = [
  validateRequestData(validators.update),
  async (req: any, res: any) => {
    const { _id } = req.params;
    const { adminId } = req.user;
    const { name, description } = req.validateBody;
    const article = await Article.findOne({ _id: _id });
    try {
      await Article.updateOne(
        { _id, adminId },
        {
          name: name ? name : article?.name,
          description: description ? description : article?.description,
        }
      );
      return respond.success({ res });
    } catch (e) {
      return respond.notFound({ res, data: e });
    }
  },
];

export const _delete = [
  validateRequestData(validators._delete),
  async (req: any, res: any) => {
    const { adminId } = req.user;
    const { _id } = req.params;
    try {
      const article = await Article.deleteOne({ _id, adminId });
      return respond.success({ res });
    } catch (e) {
      return respond.notFound({ res, data: e });
    }
  },
];
