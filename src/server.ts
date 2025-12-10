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
server.set("view-engine", "mustache")
server.engine("mustache", mustacheExpress())
server.set("views", path.join(proj_dir, "views"))
server.use(express.static(path.join(proj_dir, "public")))
server.use(mainRouter)

server.use((req, res) => {
  res.send("Pagina nao encontrada")
})


const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3000

server.listen(port, () => {
  console.log(`Listening server on http://localhost:${port}`)
})