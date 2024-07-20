import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "109.70.148.67",
  port: 3306,
  username: "codepointcreativ_insight-engine-api-admin",
  password: "r]N5ca;$hZJBbD$",
  database: "codepointcreativ_insight-engine-api",
  synchronize: true,
  logging: false,
  // Add new entites here
  entities: [],
  migrations: [],
  subscribers: [],
});