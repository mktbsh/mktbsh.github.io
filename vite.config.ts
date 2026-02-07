import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

type SpaghettiVibesItem = {
  name: string;
  file: string;
  url: string;
};

type SpaghettiVibesListing = {
  generatedAt: string;
  groups: Record<string, SpaghettiVibesItem[]>;
};

const SPAGHETTI_VIBES_VIRTUAL_ID = "virtual:spaghetti-vibes-listing";

const collectHtmlFiles = async (dirPath: string, baseDir: string) => {
  const items: SpaghettiVibesItem[] = [];
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      items.push(...(await collectHtmlFiles(fullPath, baseDir)));
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".html")) {
      continue;
    }

    const relativePath = path
      .relative(baseDir, fullPath)
      .split(path.sep)
      .join("/");
    const url = `/spaghetti-vibes/${relativePath}`;
    const name = path.basename(entry.name, ".html");

    items.push({ name, file: relativePath, url });
  }

  return items;
};

const buildSpaghettiVibesListing = async (): Promise<SpaghettiVibesListing> => {
  const baseDir = path.resolve(process.cwd(), "public/spaghetti-vibes");

  try {
    await fs.access(baseDir);
  } catch {
    return { generatedAt: new Date().toISOString(), groups: {} };
  }

  const items = await collectHtmlFiles(baseDir, baseDir);
  const groups: Record<string, SpaghettiVibesItem[]> = {};

  for (const item of items) {
    const dirName = path.dirname(item.file).split(path.sep).join("/");
    const groupKey = dirName === "." ? "root" : dirName;

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);
  }

  for (const groupItems of Object.values(groups)) {
    groupItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return {
    generatedAt: new Date().toISOString(),
    groups,
  };
};

const spaghettiVibesListingPlugin = () => {
  const resolvedId = `\0${SPAGHETTI_VIBES_VIRTUAL_ID}`;
  let cachedListing: SpaghettiVibesListing | null = null;

  const refreshListing = async () => {
    cachedListing = await buildSpaghettiVibesListing();
  };

  return {
    name: "spaghetti-vibes-listing",
    resolveId(id: string) {
      if (id === SPAGHETTI_VIBES_VIRTUAL_ID) {
        return resolvedId;
      }
      return null;
    },
    async load(id: string) {
      if (id !== resolvedId) {
        return null;
      }

      if (!cachedListing) {
        await refreshListing();
      }

      return `export default ${JSON.stringify(cachedListing)};`;
    },
    async buildStart() {
      await refreshListing();
    },
    configureServer(server: {
      watcher: {
        add: (path: string) => void;
        on: (event: string, cb: () => void) => void;
      };
      ws: { send: (payload: { type: string; path: string }) => void };
    }) {
      const watchDir = path.resolve(process.cwd(), "public/spaghetti-vibes");
      server.watcher.add(watchDir);
      const onChange = async () => {
        await refreshListing();
        server.ws.send({ type: "full-reload", path: "*" });
      };

      server.watcher.on("add", onChange);
      server.watcher.on("unlink", onChange);
      server.watcher.on("change", onChange);
      server.watcher.on("addDir", onChange);
      server.watcher.on("unlinkDir", onChange);
    },
  };
};

export default defineConfig({
  plugins: [solid(), tailwindcss(), spaghettiVibesListingPlugin()],
});
