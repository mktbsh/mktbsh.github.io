import fs from "fs";
import path from "path";

import type { Features } from "types/static/Features";

export function getFeaturesJson(): Features {
    const fullPath = path.join(`public`, `json`, `features.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return JSON.parse(fileContents);
}