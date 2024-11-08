const express = require("express");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const connectToMongo = require("./utils/db");
connectToMongo();

const adminRoute = require("./routes/adminRoute");

let port = process.env.PORT;

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);

app.listen(port, () => console.log(`Server listening at port ${port}`));
