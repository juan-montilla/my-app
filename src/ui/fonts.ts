import localFont from 'next/font/local';


export const Monofont = localFont({
  src: [
    {
      path : '../../public/fonts/monofonto/monofonto-rg.otf',
      weight: '400',
      style: 'normal'
    },
  ],
  variable: '--font-monofont'
});
