import { cn } from '@/lib/utils';

/**
 * Shared primitives for the illustrated "screens" used across the site.
 * They mirror ZoneOverlayView in the app: systemBlue fill, white border,
 * rounded 10pt corners, large semi-transparent zone numbers.
 */

export function Screen({
  className,
  children,
  menuBar = true,
  title = 'Finder',
  highlightIcon = false,
}: {
  className?: string;
  children: React.ReactNode;
  menuBar?: boolean;
  title?: string;
  highlightIcon?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden rounded-[1.25rem] bg-screen text-screen-foreground ring-1 ring-white/10',
        'shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)]" />
      {menuBar ? <MenuBar title={title} highlightIcon={highlightIcon} /> : null}
      <div className="@container relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function MenuBar({
  title = 'Finder',
  highlightIcon = false,
}: {
  title?: string;
  highlightIcon?: boolean;
}) {
  return (
    <div className="relative flex h-7 shrink-0 items-center justify-between border-b border-white/8 bg-white/4 px-3 text-[10px] text-white/70">
      <span className="flex items-center gap-2.5">
        <span className="size-2.5 rounded-[3px] bg-white/70" />
        <span className="font-semibold text-white/85">{title}</span>
        <span className="hidden sm:inline">File</span>
        <span className="hidden sm:inline">Edit</span>
        <span className="hidden sm:inline">View</span>
      </span>
      <span className="flex items-center gap-2.5">
        <ZoneBoxGlyph highlighted={highlightIcon} />
        <span className="hidden h-2 w-4 rounded-sm border border-white/50 sm:inline-block" />
        <span>9:41</span>
      </span>
    </div>
  );
}

export function ZoneBoxGlyph({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <span
      className={cn(
        'relative inline-grid size-3.5 grid-cols-3 gap-px rounded-[3px] p-px',
        highlighted && 'bg-zone/40 ring-2 ring-zone ring-offset-1 ring-offset-black/60',
      )}
    >
      {Array.from({ length: 3 }, (_, i) => (
        <span key={i} className="rounded-[1px] bg-white/85" />
      ))}
    </span>
  );
}

export function Zone({
  className,
  n,
  active = false,
  dashed = false,
  children,
}: {
  className?: string;
  n?: string;
  active?: boolean;
  dashed?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative rounded-[10px] border-2 transition-colors',
        active
          ? 'border-zone-border/90 bg-zone/40 shadow-[0_0_0_1px_var(--zone),0_0_28px_-4px_var(--zone)]'
          : 'border-zone-border/40 bg-zone/20',
        dashed && 'border-dashed',
        className,
      )}
    >
      {n ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-semibold text-white/80 [font-size:clamp(1.25rem,6cqw,2.75rem)]">
          {n}
        </span>
      ) : null}
      {children}
    </div>
  );
}

export function AppWindow({
  title,
  className,
  accent = false,
  variant = 'text',
}: {
  title: string;
  className?: string;
  accent?: boolean;
  variant?: 'text' | 'browser' | 'terminal' | 'grid';
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[7px] border border-white/12 bg-[oklch(0.24_0.02_265)] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)]',
        accent && 'border-white/25',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/4 px-2 py-1.5">
        <span className="size-1.5 rounded-full bg-[#ff5f57]" />
        <span className="size-1.5 rounded-full bg-[#febc2e]" />
        <span className="size-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-1.5 truncate text-[9px] font-medium text-white/60">{title}</span>
      </div>
      <div className="p-2">
        {variant === 'text' ? (
          <div className="space-y-1.5">
            <span className="block h-1.5 w-4/5 rounded-full bg-white/18" />
            <span className="block h-1.5 w-3/5 rounded-full bg-white/12" />
            <span className="block h-1.5 w-2/3 rounded-full bg-zone/60" />
            <span className="block h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        ) : null}
        {variant === 'browser' ? (
          <div className="space-y-1.5">
            <span className="block h-2 w-full rounded-full bg-white/10" />
            <div className="grid grid-cols-3 gap-1.5 pt-0.5">
              <span className="block h-6 rounded-[3px] bg-white/8" />
              <span className="block h-6 rounded-[3px] bg-white/8" />
              <span className="block h-6 rounded-[3px] bg-zone/40" />
            </div>
          </div>
        ) : null}
        {variant === 'terminal' ? (
          <div className="space-y-1.5 font-mono">
            <span className="block h-1.5 w-1/3 rounded-full bg-[#28c840]/70" />
            <span className="block h-1.5 w-3/4 rounded-full bg-white/14" />
            <span className="block h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        ) : null}
        {variant === 'grid' ? (
          <div className="grid grid-cols-2 gap-1.5">
            <span className="block h-4 rounded-[3px] bg-white/10" />
            <span className="block h-4 rounded-[3px] bg-white/10" />
            <span className="block h-4 rounded-[3px] bg-zone/40" />
            <span className="block h-4 rounded-[3px] bg-white/10" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
