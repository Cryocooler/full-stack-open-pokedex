const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3007;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
