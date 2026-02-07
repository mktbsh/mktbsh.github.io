import { For, Show } from "solid-js";
import listing from "virtual:spaghetti-vibes-listing";

function App() {
  const groups = Object.entries(listing.groups).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <main class="min-h-screen bg-zinc-950 text-zinc-100">
      <div class="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header class="space-y-3">
          <p class="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Spaghetti vibes
          </p>
          <h1 class="text-3xl font-semibold text-zinc-50">Directory listing</h1>
          <p class="text-sm text-zinc-400">
            Generated at {new Date(listing.generatedAt).toLocaleString("ja-JP")}
          </p>
        </header>

        <Show
          when={groups.length > 0}
          fallback={
            <div class="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 px-6 py-8 text-sm text-zinc-400">
              public/spaghetti-vibes 配下に HTML
              ファイルが見つかりませんでした。
            </div>
          }
        >
          <section class="space-y-8">
            <For each={groups}>
              {([groupName, items]) => (
                <div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-5">
                  <div class="mb-4 flex items-center justify-between">
                    <h2 class="text-lg font-semibold text-zinc-100">
                      {groupName === "root" ? "root" : groupName}
                    </h2>
                    <span class="text-xs text-zinc-500">
                      {items.length} page{items.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <ul class="grid gap-2 sm:grid-cols-2">
                    <For each={items}>
                      {(item) => (
                        <li>
                          <a
                            class="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm transition hover:border-zinc-600 hover:bg-zinc-900"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span class="font-medium text-zinc-200">
                              {item.name}
                            </span>
                            <span class="text-xs text-zinc-500">
                              {item.file}
                            </span>
                          </a>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              )}
            </For>
          </section>
        </Show>
      </div>
    </main>
  );
}

export default App;
