import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GlobalContextProvider } from './context/store';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Age Calculator',
  description: 'Age is just a number, calculate it!',
  icons: {
    icon: '/favicon.ico',
  },
  authors: {
    name: 'Oğuzhan Uyanık',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
