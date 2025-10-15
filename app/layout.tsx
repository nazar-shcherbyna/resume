import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Nazar Shcherbyna — Software Engineer Resume",
  description:
    "Personal resume website of Nazar Shcherbyna — Software Engineer experienced in React, Next.js, React Native. Built with modern design, performance, and scalability in mind.",
  metadataBase: new URL("https://nazar-shcherbyna.vercel.app"),
  openGraph: {
    title: "Nazar Shcherbyna — Software Engineer Resume",
    description:
      "Personal resume website of Nazar Shcherbyna — Software Engineer experienced in React, Next.js, React Native. Built with modern design, performance, and scalability in mind.",
    url: "https://nazar-shcherbyna.vercel.app",
    siteName: "Nazar Shcherbyna Resume",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Nazar Shcherbyna Resume Website Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazar Shcherbyna — Software Engineer Resume",
    description:
      "Personal resume website of Nazar Shcherbyna — Software Engineer experienced in React, Next.js, React Native. Built with modern design, performance, and scalability in mind.",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </head>
      <body className="bg-white dark:bg-neutral-950">{children}</body>
    </html>
  );
}
