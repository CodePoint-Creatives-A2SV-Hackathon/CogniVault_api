import * as express from 'express'
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import * as path from "path";
import * as fileUpload from "express-fileupload";
import * as cors from "cors";
import { ApiResponse } from './utils/response..util';

AppDataSource.initialize()
  .then(async () => {
    // create express app
    // setup express app here
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(
      fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
      })
    );
    // register express routes from defined application routes
    Routes.forEach((route) => {
      const routeMiddleware = route.middleware || [];
      (app as any)[route.method](
        route.route,
        ...routeMiddleware,
        async (req: Request, res: Response, next: Function) => {
          try {
            const result: ApiResponse<any> = await new (route.controller as any)()[route.action](
              req,
              res,
              next
            );
            res.status(result.statusCode).json({
              message: result.message,
              data: result.data
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
          }
        }
      );
    })
    let uploadPath = path.join(__dirname, "..", "uploads");

    app.use("/static/images", express.static(uploadPath));

    // start express server
    app.listen(3000);
  })
  .then(_ => console.log('Server started'))
  .catch((error) => console.log(error));