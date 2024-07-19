import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";

import { Ticket } from "../entity/Test";
import { ApiResponse } from "../utils/response..util";

export class TestController {
  private repo = AppDataSource.getRepository(Ticket);

  async get(request: Request, response: Response, next: NextFunction): Promise<ApiResponse<any>> {
    return { statusCode: 200, data: "Sample Data" }

  }

}
