import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "./style/header.css"
import "./style/banner.css"
import "./style/working.css"
import "./style/styles.css"

const robotoMono = Roboto_Mono({
  weight: "400",
  variable: "--font-roboto-mono"
})

const roboto = Roboto({
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "3D Tour",
  description: "3d Tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
