import type { Metadata } from "next";
import { Rufina, Lato } from "next/font/google";
import "./globals.css";

const rufina = Rufina({ subsets: ["latin"] ,weight: ["400", "700"], variable:"--font-rufina"  });
const lato = Lato({ subsets: ["latin"] ,weight: ["400", "700"], variable:"--font-Lato"  });

export const metadata: Metadata = {
  title: "COSTA VERDE BBQ & GRILL",
  description: "Portuguese & Brazilian Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <body className={`${rufina.variable} ${lato.variable} min-h-[100dvh]`}>{children}</body>
    </html>
  );
}
