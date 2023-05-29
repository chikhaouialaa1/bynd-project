import axios from "axios";
import { getAccessToken } from "../utils/auth";

export const request = async (method: string, url: string, body: object) => {
  return await axios({
    method,
    url: `${import.meta.env.VITE_APP_API}${url}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: body,
  });
};

export const clientRequest = async (
  method: string,
  url: string,
  body: object
) => {
  return await axios({
    method,
    url: `${import.meta.env.VITE_APP_API}${url}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    data: body,
  });
};
