import {ReactElement} from 'react';
import {ConnectionStatus} from '@/app/components/connection-status';
import {Settings} from '@/app/components/settings';
import SvgLogo from '@/assets/logo-wide.svg?react';

export function Navigation(): ReactElement {
  return (
    <div className="rounded-xl bg-brand p-2 text-brand-foreground md:p-4">
      <div className="flex items-center justify-between">
        <SvgLogo />
        <div className="flex items-center gap-2">
          <ConnectionStatus />
          <Settings />
        </div>
      </div>
    </div>
  );
}
