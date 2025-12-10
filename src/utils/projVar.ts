import path from "path";
import { fileURLToPath } from "url";

const file = fileURLToPath(import.meta.url)
export const proj_dir = path.join(file, "..", "..", "..")