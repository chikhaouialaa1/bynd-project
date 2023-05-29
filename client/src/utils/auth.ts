import { ACCESS_TOKEN } from "../constants/cookies";
import UniversalCookies from "universal-cookie";
import jwt_decode from "jwt-decode";

jwt_decode;

const Cookies = new UniversalCookies();

export const setAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN, token);
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN);
};

export const userToken = () => {
  const userToken = getAccessToken();
  return JSON.parse(atob(userToken.split(".")[1]));
};

export const removeAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN);
};

export const verifyToken = () => {
  let token = getAccessToken();
  if (token) {
    let decodedToken = jwt_decode(token);
    let currentDate = new Date();
    if (
      // @ts-ignore
      decodedToken.exp * 1000 < currentDate.getTime() &&
      decodedToken &&
      token
    ) {
      return false;
    } else {
      return true;
    }
  } else return false;
};
