import { For, Show } from "solid-js";
import listing from "virtual:spaghetti-vibes-listing";

function App() {
  const groups = Object.entries(listing.groups).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );
  const allItems = groups.flatMap(([, items]) => items);

  return (
    <main class="min-h-screen bg-zinc-950 text-zinc-100">
      <div class="mx-auto w-full max-w-6xl px-4 py-6">
        <header class="mb-4 flex flex-wrap items-baseline justify-between gap-2 text-xs text-zinc-400">
          <span class="font-semibold text-zinc-200">Spaghetti vibes</span>
          <span>
            {allItems.length} pages •{" "}
            {new Date(listing.generatedAt).toLocaleString("ja-JP")}
          </span>
        </header>

        <Show
          when={allItems.length > 0}
          fallback={
            <div class="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/40 px-4 py-6 text-sm text-zinc-400">
              public/spaghetti-vibes 配下に HTML
              ファイルが見つかりませんでした。
            </div>
          }
        >
          <section class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <For each={allItems}>
              {(item) => (
                <article class="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40">
                  <div class="flex items-center justify-between gap-2 border-b border-zinc-800 px-3 py-2 text-xs">
                    <span class="truncate text-zinc-200">{item.name}</span>
                    <a
                      class="shrink-0 text-zinc-400 transition hover:text-zinc-200"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      open
                    </a>
                  </div>
                  <div class="aspect-[4/3] bg-zinc-950">
                    <iframe
                      class="h-full w-full"
                      src={item.url}
                      title={item.name}
                      loading="lazy"
                    />
                  </div>
                </article>
              )}
            </For>
          </section>
        </Show>
      </div>
    </main>
  );
}

export default App;
