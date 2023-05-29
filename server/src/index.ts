import app from "./app";
import config from "./config";
import { db } from "./configuration/database";

export const database = db;

app.listen(config.port, () => {
  console.log(`Listening on ${config.port}`);
});
