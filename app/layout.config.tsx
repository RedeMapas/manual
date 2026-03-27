import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import Image from 'next/image';

import LogoCultBR from '../public/img/cultbr-fundo-claro.png';
import LogoCultBRDark from '../public/img/cultbr-fundo-escuro.png';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image alt="Cult Editais" src={LogoCultBR} className="h-8 w-auto object-contain block dark:hidden" />
        <Image alt="Cult Editais" src={LogoCultBRDark} className="h-8 w-auto object-contain hidden dark:block" />
        
        <h1>Manual Cult Editais</h1>
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
