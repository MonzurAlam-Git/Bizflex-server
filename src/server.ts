import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);

    app.listen(config.port, () => {
      console.log(
        `Alhamdulillah! Project BizFlex  works on port ${config.port}`
      );
    });
  } catch (error) {
    console.error(error);
  }
}

main();
