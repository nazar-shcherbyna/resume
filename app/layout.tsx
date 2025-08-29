import "../styles/globals.css";

export const metadata = {
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
      <body className="bg-white dark:bg-neutral-950">{children}</body>
    </html>
  );
}
