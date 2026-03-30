export default function Loading() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-6 p-4 sm:p-8">
      <div className="w-full rounded-lg border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur">
        <div className="flex items-center justify-center">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
            <div className="absolute inset-0 animate-pulse bg-black/5" />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="h-6 w-2/3 animate-pulse rounded bg-black/5" />
          <div className="h-4 w-full animate-pulse rounded bg-black/5" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-black/5" />
        </div>

        <div className="mt-6 overflow-hidden rounded-lg">
          <div className="relative aspect-[16/9] w-full bg-black/5">
            <div className="absolute inset-0 animate-pulse bg-black/5" />
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-700/80">Lade Inhalte…</p>
    </main>
  );
}

