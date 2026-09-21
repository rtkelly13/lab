import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/css/tailwind.css';

export const metadata: Metadata = {
  title: 'lab',
  description: 'Local-first web experiments. Nothing here deploys.',
  robots: { index: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="midnight">
      <body className="min-h-screen bg-(--ds-surface-base) text-(--ds-text-primary) antialiased">
        <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
      </body>
    </html>
  );
}
