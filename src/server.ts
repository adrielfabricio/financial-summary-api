import "reflect-metadata";
import "module-alias/register";
import dotenv from "dotenv";
import { register } from "tsconfig-paths";
import * as path from "path";

import { closeDatabase, dataSource } from "./config/database";

import app from "./app";
import tsConfig from "../tsconfig.json";

const baseUrl = path.resolve(__dirname, "..", tsConfig.compilerOptions.baseUrl);

dotenv.config();
register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dataSource.initialize();

    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    process.on("SIGTERM", async () => {
      console.log("SIGTERM signal received: closing HTTP server");
      server.close(async () => {
        await closeDatabase();
        console.log("HTTP server closed");
      });
    });

    process.on("SIGINT", async () => {
      console.log("SIGINT signal received: closing HTTP server");
      server.close(async () => {
        await closeDatabase();
        console.log("HTTP server closed");
      });
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

startServer();
