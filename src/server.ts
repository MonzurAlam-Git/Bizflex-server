import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  const port = 5000;
  const db_url =
    "mongodb+srv://bizflex-new:bizflex0000@bizflexcluster.ah64u.mongodb.net/bizflexDB?retryWrites=true&w=majority&appName=BizflexCluster";
  try {
    await mongoose.connect(db_url!);
    console.log(process.env.DB_URL);
    // await mongoose.connect(config.DB_URL as string);

    app.listen(port, () => {
      console.log(`Alhamdulillah! Project BizFlex  works on port ${port}`);
    });
  } catch (error) {
    console.log("error =>", error);
  }
}

main();
