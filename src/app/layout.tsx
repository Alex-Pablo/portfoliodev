import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";


export const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  style:'normal',
  weight:['300','400','500','600','700','800','900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Desarrollador web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
        </body>
    </html>
  );
}
