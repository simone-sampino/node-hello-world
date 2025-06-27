console.log(chalk.green.bgYellow("Hello Boolean"));

// Bonus
import "dotenv/config";

import chalk from "chalk";

import axios from "axios";

axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((res) => console.log(res.data));
