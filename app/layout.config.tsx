import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import Image from 'next/image';

import LogoRedeMapas from '../public/svg/dark-logo-rede-das-artes.svg';
import LogoRedeMapasDark from '../public/svg/light-logo-rede-das-artes.svg';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/redemapas/manual',
  nav: {
    title: (
      <>
        {/* <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg> */}
        <Image alt="M" src={LogoRedeMapas} className="w-25 object-contain mx-auto block dark:hidden" />
        <Image alt="M" src={LogoRedeMapasDark} className="w-25 object-contain mx-auto hidden dark:block" />
        
        <h1>Manual Rede das Artes</h1>
      </>
    ),
  },
  // links: [
  //   {
  //     text: 'Público',
  //     url: '/users',
  //     active: 'nested-url',
  //   },
  //   {
  //     text: 'Usuários',
  //     url: '/usuarios',
  //     active: 'nested-url',
  //   },
  //   {
  //     text: 'Desenvolvedoras',
  //     url: '/devs',
  //     active: 'nested-url',
  //   },
  //   {
  //     text: 'Administradoras',
  //     url: '/suporte',
  //     active: 'nested-url',
  //   },
  // ],
};
