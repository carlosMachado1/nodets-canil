import type { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject.js";
import { Pet } from "../models/pets.js";

export function home(req: Request, res: Response) {
  let list = Pet.getAll()

  res.render("pages/page", {
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    menu: createMenuObject("all"),
    list
  })
}

export function dogs(req: Request, res: Response) {
  let list = Pet.getFromType("dog")

  res.render("pages/page", {
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    menu: createMenuObject("dog"),
    list
  })
}

export function cats(req: Request, res: Response) {
  let list = Pet.getFromType("cat")

  res.render("pages/page", {
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    menu: createMenuObject("cat"),
    list
  })
}

export function fishes(req: Request, res: Response) {
  let list = Pet.getFromType("fish")

  res.render("pages/page", {
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    menu: createMenuObject("fish"),
    list
  })
}
