const express = require("express");
const app = express();
require("dotenv").config();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3007;

app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on ${PORT}`);
});
