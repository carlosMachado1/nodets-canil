type MenuOptions = "" | "cat" | "dog" | "cat" | "fish" | "all"

export function createMenuObject(activeMenu: MenuOptions) {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if (activeMenu !== "") {
    returnObject[activeMenu] = true
  }

  returnObject
}