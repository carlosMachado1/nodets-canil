import { Router } from "express"
import { home } from "../controllers/pageController.js"
import { searchPage } from "../controllers/searchController.js"


export const mainRouter = Router()

mainRouter.get("/ping", (req, res) => {
  return res.json({ pong: true })
})

mainRouter.get("/", home)
mainRouter.get("/search", searchPage)
