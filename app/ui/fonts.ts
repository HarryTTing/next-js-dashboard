import { Inter, Lusitana, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({
    weight: ['200', '300', '400'],
    subsets: ['latin']
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });