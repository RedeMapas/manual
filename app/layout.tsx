import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

const ptBR = {
  search: 'Buscar',
  searchNoResult: 'Nenhum resultado encontrado.',
  toc: 'Nesta página',
  tocNoHeadings: 'Sem títulos',
  lastUpdate: 'Última atualização',
  chooseLanguage: 'Selecionar idioma',
  nextPage: 'Próxima página',
  previousPage: 'Página anterior',
  chooseTheme: 'Selecionar tema',
  editOnGithub: 'Editar no GitHub',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider i18n={{ locale: 'pt-BR', translations: ptBR }}>{children}</RootProvider>
      </body>
    </html>
  );
}
