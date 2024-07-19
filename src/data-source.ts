import "reflect-metadata";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "",
  port: 3306,
  username: "",
  password: "",
  database: "",
  synchronize: true,
  logging: false,
  // Add new entites here
  entities: [],
  migrations: [],
  subscribers: [],
});
