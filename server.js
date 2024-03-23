const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

//change this after with ENV file
app.use(cors());

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
});