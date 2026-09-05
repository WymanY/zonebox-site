export function GuideStage({ id }: { id: string }) {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-border/80 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--card)_88%,var(--foreground)_12%),var(--card))] p-4 shadow-[inset_0_1px_0_color-mix(in_oklch,var(--foreground)_8%,transparent)]">
      <MenuChrome />
      <div className="mt-3 aspect-[16/10]">
        {id === 'find' ? <FindDemo /> : null}
        {id === 'access' ? <AccessDemo /> : null}
        {id === 'snap' ? <SnapDemo /> : null}
        {id === 'editor' ? <EditorDemo /> : null}
        {id === 'divider' ? <DividerDemo /> : null}
        {id === 'workspace' ? <WorkspaceDemo /> : null}
      </div>
    </div>
  );
}

function MenuChrome() {
  return (
    <div className="flex h-7 items-center justify-between rounded-md bg-black/80 px-3 text-[10px] text-white/80">
      <span>Finder</span>
      <span className="flex items-center gap-2">
        <span className="inline-grid grid-cols-3 gap-px">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="size-1 rounded-[1px] bg-lime-300" />
          ))}
        </span>
        <span>9:41</span>
      </span>
    </div>
  );
}

function Zone({
  className,
  n,
  active = false,
  children,
}: {
  className?: string;
  n?: string;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={[
        'relative rounded-xl border',
        active
          ? 'border-lime-400 bg-lime-400/15 shadow-[0_0_0_1px_rgba(163,230,53,0.35)]'
          : 'border-lime-400/45 bg-lime-400/8',
        className,
      ].join(' ')}
    >
      {n ? (
        <span className="absolute left-2 top-2 font-mono text-[11px] text-lime-300">{n}</span>
      ) : null}
      {children}
    </div>
  );
}

function WindowCard({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={[
        'overflow-hidden rounded-lg border border-white/10 bg-[#1b1f1c] shadow-lg',
        className,
      ].join(' ')}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-2 py-1.5">
        <span className="size-1.5 rounded-full bg-red-400/80" />
        <span className="size-1.5 rounded-full bg-amber-300/80" />
        <span className="size-1.5 rounded-full bg-lime-400/80" />
        <span className="ml-1 truncate text-[10px] text-white/55">{title}</span>
      </div>
      <div className="space-y-1.5 p-2">
        <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
        <span className="block h-1.5 w-3/5 rounded-full bg-white/10" />
        <span className="block h-1.5 w-2/3 rounded-full bg-lime-300/30" />
      </div>
    </div>
  );
}

function FindDemo() {
  return (
    <div className="relative h-full rounded-xl bg-[#111411]">
      <div className="absolute right-8 top-8 rounded-xl border border-white/10 bg-[#1c211d] p-3 text-[11px] text-white/75 shadow-2xl">
        <p className="mb-2 font-medium text-white">ZoneBox</p>
        <p>Preview Zones</p>
        <p>Open Layout Editor</p>
        <p>Welcome Tour…</p>
      </div>
      <div className="absolute right-[18%] top-0 h-10 w-px bg-lime-300/80" />
      <p className="absolute right-[4%] top-12 text-[11px] text-lime-200">menu bar</p>
    </div>
  );
}

function AccessDemo() {
  return (
    <div className="flex h-full items-center justify-center rounded-xl bg-[#111411] p-6">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#1c211d] p-4 text-white">
        <p className="text-sm font-medium">Accessibility</p>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
          <span className="text-sm">ZoneBox</span>
          <span className="h-5 w-9 rounded-full bg-lime-400">
            <span className="ml-4 mt-0.5 block size-4 rounded-full bg-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

function SnapDemo() {
  return (
    <div className="grid h-full grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-2">
      <Zone n="1" className="row-span-2" active>
        <WindowCard title="Code" className="absolute inset-3" />
      </Zone>
      <Zone n="2">
        <WindowCard title="Browser" className="absolute inset-3" />
      </Zone>
      <Zone n="3" />
    </div>
  );
}

function EditorDemo() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
      <Zone n="1" className="row-span-2" />
      <Zone n="2" className="col-span-2 border-dashed" active />
      <Zone n="3" />
      <Zone n="+" className="border-dashed opacity-70" />
    </div>
  );
}

function DividerDemo() {
  return (
    <div className="relative grid h-full grid-cols-[1.35fr_0.65fr] gap-0">
      <Zone n="1" className="rounded-r-none" active>
        <WindowCard title="Editor" className="absolute inset-3" />
      </Zone>
      <Zone n="2" className="rounded-l-none">
        <WindowCard title="Preview" className="absolute inset-3" />
      </Zone>
      <div className="absolute inset-y-6 left-[67%] w-2 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(163,230,53,0.8)]" />
    </div>
  );
}

function WorkspaceDemo() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-2">
      <Zone n="1" active>
        <WindowCard title="Xcode" className="absolute inset-3" />
      </Zone>
      <Zone n="2">
        <WindowCard title="Safari" className="absolute inset-3" />
      </Zone>
      <Zone n="3">
        <WindowCard title="Terminal" className="absolute inset-3" />
      </Zone>
      <Zone n="4">
        <WindowCard title="Notes" className="absolute inset-3" />
      </Zone>
    </div>
  );
}
