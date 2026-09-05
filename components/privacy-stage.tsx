import { Accessibility, Monitor } from 'lucide-react';

import { Screen } from '@/components/mock-display';
import type { Copy } from '@/lib/copy';

export function PrivacyStage({ t }: { t: Copy['privacyStage'] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklch,var(--primary)_24%,transparent),transparent_75%)] blur-2xl"
      />
      <Screen className="aspect-[4/3]" title="System Settings">
        <div className="flex h-full items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/12 bg-[oklch(0.25_0.03_265)] text-white shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[11px] font-medium text-white/70">{t.window}</span>
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-[10px] text-white/50">{t.hint}</p>
              <div className="mt-3 space-y-2">
                <PermissionGroup
                  icon={<Accessibility className="size-3.5" />}
                  title={t.accessibility}
                  note={t.accessibilityNote}
                  on
                  status={t.on}
                />
                <PermissionGroup
                  icon={<Monitor className="size-3.5" />}
                  title={t.screen}
                  note={t.screenNote}
                  on={false}
                  status={t.off}
                />
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
}

function PermissionGroup({
  icon,
  title,
  note,
  on,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  note: string;
  on: boolean;
  status: string;
}) {
  return (
    <div className="rounded-lg bg-white/5 px-3 py-2.5">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[11px] font-semibold">
          <span className="flex size-5 items-center justify-center rounded-[5px] bg-zone/80 text-white">
            {icon}
          </span>
          {title}
        </span>
        <span className="text-[10px] text-white/45">{status}</span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-3 rounded-md bg-black/25 px-2.5 py-2">
        <span className="flex min-w-0 items-center gap-2">
          <span className="size-4 shrink-0 rounded-[4px] bg-zone" />
          <span className="min-w-0">
            <span className="block text-[11px] leading-tight">ZoneBox</span>
            <span className="block truncate text-[9.5px] leading-tight text-white/45">{note}</span>
          </span>
        </span>
        <span
          className={[
            'relative h-4 w-7 shrink-0 rounded-full transition-colors',
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
    </div>
  );
}
