import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Brainwave.io",
  description: "Manage your remote team work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
