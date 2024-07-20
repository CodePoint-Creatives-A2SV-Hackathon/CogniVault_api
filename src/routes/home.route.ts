import { HomeController } from "../controller/home.controller";

export const homeRouter = [
  {
    method: "get",
    route: "/",
    controller: HomeController,
    middleware: [],
    action: "get",
  },
];