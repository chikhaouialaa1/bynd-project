import { clientRequest } from "../utils/request";

export const read = async (articleId: any) => {
  const { data } = await clientRequest(
    "GET",
    `/user/articles/${articleId}`,
    {}
  );
  return data;
};

export const list = async () => {
  const { data } = await clientRequest("GET", `/user/articles/`, {});
  return data;
};

export const search = async (body: any) => {
  const { data } = await clientRequest("POST", `/user/articles/`, body);
  return data;
};
