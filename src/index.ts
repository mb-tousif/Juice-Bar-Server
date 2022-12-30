import express from "express";
import cors from "cors";
import colors from "colors";
import { serverPort } from "./config/config";
import Connection from "./server";

const port = serverPort;
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

Connection();

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Juice-Bar Server is successfully running 🚀</h1>"
  );
});

app.all("*", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'><span style='color: green'>🛢 </span> Requested Route Not Found 🚀</h1>"
  );
});

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`.blue);
});