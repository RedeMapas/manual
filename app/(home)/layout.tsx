"use client";
import { useEffect } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const searchButton = document.querySelector('[data-search-full]');

      if (searchButton && searchButton.textContent?.includes('Search')) {
        searchButton.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === 'Search') {
            node.textContent = 'Buscar';
          }
        });

        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
