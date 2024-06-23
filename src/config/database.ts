import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "IFOODSOCIAL",
  migrations: ["src/migrations/**/*.ts"],
  entities: ["src/models/**/*.model.ts"],
  synchronize: false,
  logging: true,
});

async function initializeDatabase() {
  try {
    await dataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
    throw error;
  }
}

async function closeDatabase() {
  if (dataSource.isInitialized) {
    try {
      await dataSource.destroy();
      console.log("Data Source has been closed!");
    } catch (error) {
      console.error("Error during Data Source closure:", error);
      throw error;
    }
  }
}

export { dataSource, initializeDatabase, closeDatabase };
