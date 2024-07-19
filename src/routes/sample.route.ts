import { TestController } from "../controller/Test.controller";
import { FileUploadMiddleware } from "../middlewares/upload/fileupload.middelware";

export const sampleRouter = [
  {
    method: "get",
    route: "/test",
    controller: TestController,
    middleware: [],
    action: "get",
  },

];
