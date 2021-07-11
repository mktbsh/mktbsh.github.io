import fs from "fs";
import path from "path";

import type { Features } from "types/static/Features";
import { PokemonObject } from "types/static/Pokemon";

export function getFeaturesJson(): Features {
    const fullPath = path.join(`contents`, `json`, `features.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return JSON.parse(fileContents);
}

export function getKantoPokemonJson(): PokemonObject[] {
    const fullPath = path.join(`contents`, `json`, `pokemon-kanto.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return JSON.parse(fileContents);
}