import { Metadata } from "next";
import "./globals.scss"

export const metadata: Metadata = {
  title: "Ashish Chauhan | MERN & Next.js Developer",
  description:
    "Ashish Chauhan is a Full-Stack JavaScript Developer specializing in MERN, Next.js, React.js, Node.js, Express.js and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}