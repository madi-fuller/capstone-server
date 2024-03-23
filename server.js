const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const wasteRouter = require("./routes/waste.js");

//change this after with ENV file
app.use(cors());
app.use("/api/add-waste", wasteRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
