import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Nazar Shcherbyna Resume",
  description: "Minimalistic resume website for Nazar Shcherbyna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white dark:bg-neutral-950">{children}</body>
    </html>
  );
}
