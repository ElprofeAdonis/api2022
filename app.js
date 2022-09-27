// import express from "express";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import history from "connect-history-api-fallback";
//fucniona para llmar el html
import path from "path";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hola Adonis ya funciono");
// });

//Middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
//wwww. esto es en el postman
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/auth.routes"));
app.use("/juntadirectiva", require("./routes/juntarictiva.routes"));
app.use("/estudiante", require("./routes/estudiante.routes"));

//Middlewares
app.use(history());
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

// Setting
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () =>
  console.log(`🚀 Example app listening on port ` + app.get("port"))
);
