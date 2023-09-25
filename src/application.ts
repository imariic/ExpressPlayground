import express, { Application as ExpressApplication } from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { protect } from "~/auth";
import { userRoutes, bookRoutes } from "~/routes";
import swaggerSpecs from "~/swagger";

class Application {
  private readonly _instance: ExpressApplication;

  public constructor() {
    this._instance = express();
    this._instance.use(cors());
    this._instance.use(
      "/api-docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerSpecs)
    );
    this._instance.use(express.json());
    this._instance.use(express.urlencoded({ extended: true }));
    this._instance.use(userRoutes);
    this._instance.use(protect, bookRoutes);
  }

  public getInstance(): ExpressApplication {
    return this._instance;
  }
}

export default new Application();
