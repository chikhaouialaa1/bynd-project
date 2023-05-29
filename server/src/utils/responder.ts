import { Response } from "express";

const sendResponse = (
  res: Response,
  status: number,
  code: string,
  data: any
) => {
  res.status(status).json({ code, data });
};

interface responderCb {
  (responseData: ResponseData): void;
}

interface HTTPResponse {
  success: responderCb;
  created: responderCb;
  badRequest: responderCb;
  unauthorized: responderCb;
  forbidden: responderCb;
  notFound: responderCb;
  serverError: responderCb;
}

interface ResponseData {
  res: Response;
  code?: string;
  data?: any;
  dirtylinks?: any;
}

const respond: HTTPResponse = {
  success: (responseData) =>
    sendResponse(
      responseData.res,
      200,
      responseData.code || "SUCCESS",
      responseData.data
    ),
  created: (responseData) =>
    sendResponse(
      responseData.res,
      201,
      responseData.code || "CREATED",
      responseData.data
    ),
  badRequest: (responseData) =>
    sendResponse(
      responseData.res,
      400,
      responseData.code || "BAD-REQUEST",
      responseData.data
    ),
  unauthorized: (responseData) =>
    sendResponse(
      responseData.res,
      401,
      responseData.code || "UNAUTHORIZED",
      responseData.data
    ),
  forbidden: (responseData) =>
    sendResponse(
      responseData.res,
      403,
      responseData.code || "FORBIDDEN",
      responseData.data
    ),
  notFound: (responseData) =>
    sendResponse(
      responseData.res,
      404,
      responseData.code || "NOT-FOUND",
      responseData.data
    ),
  serverError: (responseData) =>
    sendResponse(
      responseData.res,
      500,
      responseData.code || "SERVER-ERROR",
      responseData.data
    ),
};

export { respond };
