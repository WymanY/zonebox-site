'use client';

import { GuideStage } from '@/components/guide-stage';
import { Kbd } from '@/components/ui/kbd';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Copy } from '@/lib/copy';

export function GuidePanel({ t }: { t: Copy }) {
  return (
    <Tabs defaultValue={t.guides[0].id} className="gap-6">
      <TabsList variant="line" className="flex w-full flex-wrap justify-start gap-1">
        {t.guides.map((guide) => (
          <TabsTrigger key={guide.id} value={guide.id} className="px-3">
            {guide.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {t.guides.map((guide) => (
        <TabsContent key={guide.id} value={guide.id}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                {guide.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{guide.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{guide.why}</p>
              <ol className="mt-6 space-y-3">
                {guide.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-base leading-7">
                    <span className="mt-0.5 font-mono text-sm text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              {guide.keys.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.keys.map((key) => (
                    <Kbd key={key} className="h-7 min-w-0 px-2 text-sm">
                      {key}
                    </Kbd>
                  ))}
                </div>
              ) : null}
            </div>
            <GuideStage id={guide.id} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
