import { request, clientRequest } from "../utils/request";

export const signin = async (body: object) => {
  const { data } = await request("POST", "/auth/sign-in/", body);
  return data;
};

export const register = async (body: object) => {
  const { data } = await request("POST", "/auth/register/", body);
  return data;
};

export const me = async () => {
  const { data } = await clientRequest("GET", `/auth/me`, {});
  return data;
};
