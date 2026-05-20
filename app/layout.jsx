import "./globals.css";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahim Siddiqui - Full-Stack Web Developer | Portfolio",
  description:
    "Full-stack web developer specializing in React, Next.js, and 3D web experiences. 2+ years of experience delivering high-quality projects.",
  keywords: ["web developer", "React", "Next.js", "full-stack", "3D web"],
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    title: "Rahim Siddiqui - Portfolio",
    description: "Full-stack web developer portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahim Siddiqui - Portfolio",
    description: "Full-stack web developer portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monaSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
