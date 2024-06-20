import "reflect-metadata";
import "module-alias/register";
import dotenv from "dotenv";
import { register } from "tsconfig-paths";
import * as path from "path";

import Database from "@config/database";

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
  const db = Database.getInstance();
  try {
    await db.initialize();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

startServer();
