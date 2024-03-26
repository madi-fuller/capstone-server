const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const wasteRouter = require("./routes/waste.js");
const environmentRouter = require("./routes/environment.js");
const userRouter = require("./routes/users.js");
const user = require("./seed-data/user.js");

//change this after with ENV file
app.use(express.json());
app.use(cors());
app.use("/api/add-waste", wasteRouter);
app.use("/api/environmental-impact", environmentRouter);
app.use("/api/user-profile", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
