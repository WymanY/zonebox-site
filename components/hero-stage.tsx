import { AppWindow, Screen, Zone } from '@/components/mock-display';
import { Kbd } from '@/components/ui/kbd';

export function HeroStage({ layoutLabel }: { layoutLabel: string }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_45%,color-mix(in_oklch,var(--primary)_28%,transparent),transparent_75%)] blur-2xl"
      />
      <Screen className="aspect-[16/10]" title="Xcode">
        <div className="grid h-full grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-2.5 p-3 pb-10 sm:p-4 sm:pb-11">
          <Zone n="1" className="row-span-2" active>
            <div className="animate-zone-pulse absolute inset-0 rounded-[10px] bg-zone/25" />
            <AppWindow
              title="Xcode — ZoneBox"
              accent
              className="animate-snap-in absolute inset-2.5 sm:inset-3 [&>div:last-child]:h-full"
            />
          </Zone>
          <Zone n="2">
            <AppWindow title="Safari" variant="browser" className="absolute inset-2.5 sm:inset-3" />
          </Zone>
          <Zone n="3">
            <AppWindow title="Terminal" variant="terminal" className="absolute inset-2.5 sm:inset-3" />
          </Zone>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] text-white/80 shadow-lg backdrop-blur">
          <span className="inline-grid grid-cols-3 gap-px">
            <span className="h-2.5 w-1.5 rounded-[1px] bg-zone" />
            <span className="h-2.5 w-1.5 rounded-[1px] bg-zone/50" />
            <span className="h-2.5 w-1.5 rounded-[1px] bg-zone/50" />
          </span>
          <span className="font-medium">{layoutLabel}</span>
        </div>
      </Screen>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/70 px-2.5 py-1 shadow-sm">
          <Kbd className="h-5 bg-background px-1.5 text-[11px]">⇧</Kbd>
          <span>+ drag</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/70 px-2.5 py-1 shadow-sm">
          <Kbd className="h-5 bg-background px-1.5 text-[11px]">⌃⌥1</Kbd>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/70 px-2.5 py-1 shadow-sm">
          <Kbd className="h-5 bg-background px-1.5 text-[11px]">⌃⌥Z</Kbd>
        </span>
      </div>
    </div>
  );
}
