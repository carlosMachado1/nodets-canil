import express from "express"
import helmet from "helmet"
import { mainRouter } from "./routes/index.js"
import mustacheExpress from "mustache-express"
import path from "path"
import { proj_dir } from "./utils/projVar.js"


const server = express()


server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(helmet())
server.set("view engine", "mustache")
server.set("views", path.join(proj_dir, "views"))
server.engine("mustache", mustacheExpress())
server.use(express.static(path.join(proj_dir, "public")))
server.use(mainRouter)

server.use((req, res) => {
  res.render("pages/404")
})


const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3000

server.listen(port, () => {
  console.log(`Listening server on http://localhost:${port}`)
})