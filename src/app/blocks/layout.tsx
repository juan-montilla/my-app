'use client';
import React from 'react';
import { Monofont } from '@/ui/fonts';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fun with Blocks</title>
        <meta name="description" content='Fun with Blocks, do i need to say more?'/>
      </head>
      <body
        className={`${Monofont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
