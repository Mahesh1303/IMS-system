const express = require("express");
const { connect } = require("./connection");
const { UserRoute } = require("./routes/UserRoutes");
const { SecureUserroutes } = require("./routes/SecureUserRoutes");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const { InventortRoutes } = require("./routes/InventoryRoutes");
const { DATABASE_URL, PORT } = require("./constant");

const app = express();
const port = PORT || 3030;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Routes
app.use("/api/v1/auth", SecureUserroutes);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/inventory", InventortRoutes);

connect(DATABASE_URL).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((e) => {
  console.log(`DATABASE Connection error: ${e}`)
});