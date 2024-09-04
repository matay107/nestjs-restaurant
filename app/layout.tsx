import './globals.css';
import HeaderBackground from '@/components/header/header-background';
import Header from '@/components/header/header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderBackground />
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
