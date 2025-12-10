
import type { Request, Response } from "express"
import { createMenuObject } from "../helpers/createMenuObject.js"
import { Pet } from "../models/pets.js"


export function searchPage(req: Request, res: Response) {
  let q: string = req.query.q as string

  if (!q) {
    res.redirect("/")
    return
  }

  const list = Pet.getFromName(q)

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    q
  })
}
