import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Nova",
  description: "Imobiliaria Casa Nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
