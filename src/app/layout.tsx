import type { Metadata } from "next";
import { Salsa, Roboto_Condensed  } from "next/font/google";
import "../style/style.css";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});
const roboto = Roboto_Condensed({
  variable: "--font-Roboto_Condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Structure",
  description: "This is a basic Structure for start a new nextjs project. Easy to set up just copy paste and run",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${salsa.variable} ${roboto.variable} antialiased dark`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
