import { AppWindow, Screen, Zone, ZoneBoxGlyph } from '@/components/mock-display';

export function GuideStage({ id }: { id: string }) {
  return (
    <Screen
      className="aspect-[16/10] w-full"
      title={id === 'find' || id === 'access' ? 'Finder' : 'Xcode'}
      highlightIcon={id === 'find'}
    >
      {id === 'find' ? <FindDemo /> : null}
      {id === 'access' ? <AccessDemo /> : null}
      {id === 'snap' ? <SnapDemo /> : null}
      {id === 'editor' ? <EditorDemo /> : null}
      {id === 'divider' ? <DividerDemo /> : null}
      {id === 'workspace' ? <WorkspaceDemo /> : null}
    </Screen>
  );
}

function FindDemo() {
  return (
    <div className="relative h-full">
      <span className="absolute right-[3.55rem] top-0 block h-6 w-px bg-zone sm:right-[4.1rem]" />
      <div className="absolute right-4 top-6 w-44 rounded-xl border border-white/12 bg-[oklch(0.25_0.03_265)]/95 p-1.5 text-[11px] text-white/85 shadow-2xl backdrop-blur sm:right-6 sm:top-7">
        <MenuRow label="Preview Zones" />
        <MenuRow label="Open Layout Editor" shortcut="⌃⌥Z" highlighted />
        <MenuRow label="Layouts" chevron />
        <span className="my-1 block h-px bg-white/10" />
        <MenuRow label="Welcome Tour…" />
        <MenuRow label="Settings…" shortcut="⌘," />
        <span className="my-1 block h-px bg-white/10" />
        <MenuRow label="Quit ZoneBox" shortcut="⌘Q" />
      </div>
      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/12 bg-black/50 px-3 py-1.5 text-[10px] text-white/75">
        <ZoneBoxGlyph highlighted />
        <span>Menu bar · no Dock icon</span>
      </div>
    </div>
  );
}

function MenuRow({
  label,
  shortcut,
  chevron,
  highlighted,
}: {
  label: string;
  shortcut?: string;
  chevron?: boolean;
  highlighted?: boolean;
}) {
  return (
    <div
      className={[
        'flex items-center justify-between rounded-md px-2 py-1',
        highlighted ? 'bg-zone text-white' : '',
      ].join(' ')}
    >
      <span>{label}</span>
      {shortcut ? <span className={highlighted ? 'text-white/80' : 'text-white/40'}>{shortcut}</span> : null}
      {chevron ? <span className="text-white/40">›</span> : null}
    </div>
  );
}

function AccessDemo() {
  return (
    <div className="flex h-full items-center justify-center p-5">
      <div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/12 bg-[oklch(0.25_0.03_265)] text-white shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] font-medium text-white/70">Privacy &amp; Security</span>
        </div>
        <div className="p-3">
          <p className="text-[12px] font-semibold">Accessibility</p>
          <p className="mt-0.5 text-[10px] text-white/55">
            Allow the apps below to control your computer.
          </p>
          <div className="mt-3 divide-y divide-white/8 rounded-lg bg-white/5">
            <SettingsRow name="Terminal" on={false} />
            <SettingsRow name="ZoneBox" on />
            <SettingsRow name="Raycast" on={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsRow({ name, on }: { name: string; on: boolean }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="flex items-center gap-2 text-[11px]">
        <span
          className={[
            'size-4 rounded-[4px]',
            name === 'ZoneBox' ? 'bg-zone' : 'bg-white/20',
          ].join(' ')}
        />
        {name}
      </span>
      <span
        className={[
          'relative h-4 w-7 rounded-full transition-colors',
          on ? 'bg-zone' : 'bg-white/20',
        ].join(' ')}
      >
        <span
          className={[
            'absolute top-0.5 size-3 rounded-full bg-white shadow',
            on ? 'left-3.5' : 'left-0.5',
          ].join(' ')}
        />
      </span>
    </div>
  );
}

function SnapDemo() {
  return (
    <div className="grid h-full grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-2 p-3">
      <Zone n="1" className="row-span-2" active>
        <AppWindow title="Xcode" accent className="absolute inset-3" />
      </Zone>
      <Zone n="2">
        <AppWindow title="Safari" variant="browser" className="absolute inset-3" />
      </Zone>
      <Zone n="3" />
    </div>
  );
}

function EditorDemo() {
  return (
    <div className="relative h-full p-3">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
        <Zone n="1" className="row-span-2" />
        <Zone n="2" className="col-span-2" active />
        <Zone n="3" />
        <Zone n="+" dashed className="opacity-70" />
      </div>
      <div className="absolute inset-x-0 bottom-2 flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/60 p-1 text-[10px] text-white/80 backdrop-blur">
          <Pill label="Columns" />
          <Pill label="Rows" />
          <Pill label="2×2" />
          <Pill label="Custom" active />
        </div>
      </div>
    </div>
  );
}

function Pill({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={[
        'rounded-full px-2.5 py-1',
        active ? 'bg-zone text-white' : 'text-white/70',
      ].join(' ')}
    >
      {label}
    </span>
  );
}

function DividerDemo() {
  return (
    <div className="relative grid h-full grid-cols-[1.35fr_0.65fr] gap-2 p-3">
      <Zone n="1" active>
        <AppWindow title="Editor" accent className="absolute inset-3" />
      </Zone>
      <Zone n="2">
        <AppWindow title="Preview" variant="grid" className="absolute inset-3" />
      </Zone>
      <div className="absolute inset-y-8 left-[67.5%] w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_3px_var(--zone),0_0_20px_var(--zone)]" />
      <div className="absolute left-[67.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
        ⇠ 67 / 33 ⇢
      </div>
    </div>
  );
}

function WorkspaceDemo() {
  return (
    <div className="relative h-full p-3">
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-2">
        <Zone n="1" active>
          <AppWindow title="Xcode" accent className="absolute inset-3" />
        </Zone>
        <Zone n="2">
          <AppWindow title="Safari" variant="browser" className="absolute inset-3" />
        </Zone>
        <Zone n="3">
          <AppWindow title="Terminal" variant="terminal" className="absolute inset-3" />
        </Zone>
        <Zone n="4">
          <AppWindow title="Notes" className="absolute inset-3" />
        </Zone>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-center text-[11px] text-white shadow-2xl backdrop-blur">
        <p className="font-semibold">Coding</p>
        <p className="text-[10px] text-white/60">4 windows restored</p>
      </div>
    </div>
  );
}
