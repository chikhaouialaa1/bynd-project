import cors from "cors";
import express from "express";
import config from "./config";
import router from "./router";

const app = express();

app.get("/ping", (res, resp) => {
  resp.send("ok");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // @ts-ignore
    origin: config.clientOrigins[config.nodeEnv],
  })
);

app.use("/", router);

export default app;
