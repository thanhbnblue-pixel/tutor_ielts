import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'English App - IELTS, TOEIC, VSTEP',
  description: 'Nền tảng học Tiếng Anh cá nhân hóa với AI chấm điểm',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'English App',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        
        {children}
      </body>
    </html>
  );
}
