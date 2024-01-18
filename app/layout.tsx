import '@/app/ui/global.css';
import { inter, montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
