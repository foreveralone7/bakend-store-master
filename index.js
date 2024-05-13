// import Routes from "./src/routes/index.routes";
const Routes = require("./src/routes/index.routes");

const express = require("express");

const app = express();

app.use(express.json());
app.use(Routes);

require("./connectDB");

app.listen(5000, () => console.log("server is running port 5000"));
