import { EB_Garamond } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-ebGaramond",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matt Petitt",
  description: "UX Guy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
