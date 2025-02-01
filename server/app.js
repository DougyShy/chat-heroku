import "./data/init.js"; // instead of require

import express from "express";
import path from "path";
import cors from "cors";
import workshopsRouter from "./routes/workshops.js";

const app = express();

app.use(cors());

app.use("/api/workshops", workshopsRouter);

// catch 404 and forward to error handler
app.use("/api", function (req, res, next) {
  const error = new Error("Unsupported API");
  error.status = 404;
  next(error);
});

// error handler
app.use("/api", function (error, req, res, next) {
  res.status(error.status || 500);
  res.send({
    message: error.message,
  });
});

// app.use(function(req, res, next) {
//     res.sendFile( path.join( process.cwd(), 'public', 'index.html' ) );
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(`Server running on port ${PORT}`);
});

export default app;
