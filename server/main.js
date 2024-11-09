const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const notFound = require("./src/common/exeption/notfound.handler");
const AllExeptionsHandler = require("./src/common/exeption/all-exeptions.handler");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  SwaggerConfig(app);
  app.use(mainRouter);
  notFound(app);
  AllExeptionsHandler(app);
  app.listen(port, () => {
    console.log(`Server : http://localhost:${port}`);
  });
}

main();
