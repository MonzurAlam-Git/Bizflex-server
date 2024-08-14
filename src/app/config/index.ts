import dotenv from "dotenv";
import path from "path";

// By default, config will look for a file called .env in the current working directory.
// Specify a custom path if your file containing environment variables is located elsewhere.

dotenv.config({ path: [path.join(process.cwd(), "env")] });

export default {
  port: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
