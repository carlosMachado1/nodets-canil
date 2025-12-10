import { Router } from "express"
import { cats, dogs, fishes, home } from "../controllers/pageController.js"
import { searchPage } from "../controllers/searchController.js"


export const mainRouter = Router()

mainRouter.get("/ping", (req, res) => {
  return res.json({ pong: true })
})

mainRouter.get("/", home)
mainRouter.get("/dogs", dogs)
mainRouter.get("/cats", cats)
mainRouter.get("/fishes", fishes)
mainRouter.get("/search", searchPage)
