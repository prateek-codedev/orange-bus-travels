const express = require("express");

require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/dbConfig");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7500;

const usersRoute = require("./routes/usersRoutes");

app.use("/api/users", usersRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Cannot connect to DB");
    console.log(err);
  }
  console.log(`Server is running at port ${port}`);
});
