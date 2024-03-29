import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const font = Rubik({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Color Buddy',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <nav className="p-2">
          <ul className="flex gap-2 items-baseline text-lg">
            <li>
              <a href="htmlcolors">HTML Colors</a>
            </li>
            <li>
              <a href="color-converter">Color Converter</a>
            </li>
            <li className="ml-auto text-sm underline">
              <a href="https://github.com/hahahackers/color-buddy">View source code on GitHub</a>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
