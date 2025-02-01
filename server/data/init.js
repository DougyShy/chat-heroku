import mongoose from "mongoose"; // Correct import for ES Modules

mongoose.set("returnOriginal", false);

// create models
import "../models/Workshop.js"; // Ensure to include the file extension (.js) when using ES Modules

//const DB_HOST = "localhost";
const DB_HOST =
  "mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "techDB";

//const connectionStr = `mongodb://${DB_HOST}/${DB_NAME}`;
const connectionStr = `${DB_HOST}/${DB_NAME}`;

console.log(connectionStr);

console.log(`Connecting to database ${DB_NAME}`);

mongoose.connect(connectionStr, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

const connection = mongoose.connection;

mongoose.connection.on("error", (error) => {
  console.error(
    `Could not connect to database ${DB_NAME}, error = `,
    error.message
  );
  process.exit(1);
});

mongoose.connection.on("open", function () {
  console.log(`Connected to database ${DB_NAME}`);
});
