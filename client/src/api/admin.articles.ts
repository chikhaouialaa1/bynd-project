import { clientRequest } from "../utils/request";

export const get = async (_id: string) => {
  const { data } = await clientRequest("GET", `/admin/articles/${_id}`, {});
  return data;
};

export const list = async () => {
  const { data } = await clientRequest("GET", `/admin/articles/`, {});
  return data;
};

export const create = async (body: object) => {
  const { data } = await clientRequest("POST", `/admin/articles/`, body);
  return data;
};

export const update = async (body: object, _id: string) => {
  const { data } = await clientRequest("PUT", `/admin/articles/${_id}`, body);
  return data;
};

export const _delete = async (_id: string) => {
  const { data } = await clientRequest("DELETE", `/admin/articles/${_id}`, {});
  return data;
};
