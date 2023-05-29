import { clientRequest } from "../utils/request";

export const me = async () => {
  const { data } = await clientRequest("GET", `/users/me`, {});
  return data;
};

export const update = async (body: object) => {
  const { data } = await clientRequest("PUT", `/users/me/`, body);
  return data;
};

export const _delete = async () => {
  const { data } = await clientRequest("DELETE", `/users/me`, {});
  return data;
};
