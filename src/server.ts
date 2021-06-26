import { app } from "./app";

app.listen(process.env.PORT || 3333, () => {
  console.log("API started at port: " + process.env.PORT || 3333);
});