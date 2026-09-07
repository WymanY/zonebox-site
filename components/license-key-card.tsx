'use client';

import { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LicenseKeyCard({
  licenseKey,
  copyLabel,
  copiedLabel,
  activateLabel,
}: {
  licenseKey: string;
  copyLabel: string;
  copiedLabel: string;
  activateLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const activateHref = 'zonebox://activate?key=' + encodeURIComponent(licenseKey);

  async function copy() {
    try {
      await navigator.clipboard.writeText(licenseKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-8 rounded-[1.5rem] border bg-card/80 p-5">
      <code className="block break-all font-mono text-[15px] tracking-wide">{licenseKey}</code>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copy}
          className={cn(buttonVariants({ size: 'lg' }), 'h-11 rounded-xl px-5 text-[15px]')}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
        <a
          href={activateHref}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'h-11 rounded-xl px-5 text-[15px]',
          )}
        >
          {activateLabel}
        </a>
      </div>
    </div>
  );
}
