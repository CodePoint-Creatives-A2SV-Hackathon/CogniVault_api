import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/response..util";

export class HomeController {
  async get(request: Request, response: Response, next: NextFunction): Promise<ApiResponse<any>> {
    return { statusCode: 200, message: "Hello from Insight Engine" };
  }
}
