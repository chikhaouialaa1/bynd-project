import dotenv from "dotenv";
dotenv.config();
import packageJson from "../package.json";

const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: process.env.NODE_ENV,
  port: process.env["PORT"] ?? 4000,

  clientOrigins: {},
};

export default config;
