import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { connectDB } from "./model/model.connect";
import router from "./paths/routes";

const app = express();
const port = 5000;

app.use(json());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

connectDB().then((e) => {
  app.listen(port, () => {
    console.log(`the server is on localhost:${port}`);
  });
});
