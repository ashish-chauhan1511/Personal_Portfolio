import { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.scss"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashish Chauhan | Full-Stack Developer",
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}