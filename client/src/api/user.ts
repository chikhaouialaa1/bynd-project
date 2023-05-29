import { clientRequest } from "../utils/request";

export const read = async (userId: any) => {
  const { data } = await clientRequest("GET", `/users/${userId}`, {});
  return data;
};

export const update = async (body: object, userId: any) => {
  const { data } = await clientRequest("PUT", `/users/${userId}`, body);
  return data;
};

export const _delete = async (userId: any) => {
  const { data } = await clientRequest("DELETE", `/users/${userId}`, {});
  return data;
};
