require("dotenv").config()
const express = require("express"), path = require("path"), routes = require("./routes/routes.js"), morgan = require("morgan"), session = require("express-session"), { initialize } = require("passport")

// Inicializations
app = express();
// require("./database")

//static files
app.use(express.static(path.join(__dirname, "public")))

//settings
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("port", process.env.PORT || 6079)

//middleweares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use(routes)

//server listening
app.listen(app.get("port"), _ => console.info(`http://localhost:${app.get("port")}`))