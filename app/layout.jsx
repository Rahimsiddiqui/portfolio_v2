import "./globals.css";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahim Siddiqui Portfolio",
  description:
    "A stunning Portfolio of Rahim Siddiqui made from GSAP and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monaSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
