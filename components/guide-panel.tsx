'use client';

import {
  Grid2x2,
  Layers,
  Lock,
  Menu,
  MousePointer2,
  SeparatorVertical,
} from 'lucide-react';

import { GuideStage } from '@/components/guide-stage';
import { Kbd } from '@/components/ui/kbd';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Copy } from '@/lib/copy';

const icons = {
  find: Menu,
  access: Lock,
  snap: MousePointer2,
  editor: Grid2x2,
  divider: SeparatorVertical,
  workspace: Layers,
} as const;

export function GuidePanel({ t }: { t: Copy }) {
  return (
    <Tabs defaultValue={t.guides[0].id} className="gap-8">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-2xl border bg-muted/60 p-1.5 sm:w-fit">
        {t.guides.map((guide, index) => {
          const Icon = icons[guide.id];
          return (
            <TabsTrigger
              key={guide.id}
              value={guide.id}
              className="h-9 flex-none gap-2 rounded-xl px-3 text-[13px] data-active:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_0_0_1px_var(--border)]"
            >
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                {index + 1}
              </span>
              <Icon className="size-4 text-primary" />
              {guide.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {t.guides.map((guide) => (
        <TabsContent key={guide.id} value={guide.id} className="animate-fade-up">
          <div className="card-surface grid gap-8 rounded-[1.75rem] p-5 sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:p-8">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {guide.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                {guide.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{guide.why}</p>
              <ol className="mt-6 space-y-3">
                {guide.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-[15px] leading-7">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 font-mono text-[11px] font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              {guide.keys.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {guide.keys.map((key) => (
                    <Kbd
                      key={key}
                      className="h-7 min-w-0 rounded-md border bg-background px-2 text-[13px] text-foreground shadow-[0_1px_0_var(--border)]"
                    >
                      {key}
                    </Kbd>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="order-1 lg:order-2">
              <GuideStage id={guide.id} />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
