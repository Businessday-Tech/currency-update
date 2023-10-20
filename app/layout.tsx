import ProgressBar from "@/components/ProgressBar";
import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Business News Nigeria | Daily Updates | Businessday.ng",
  description:
    "Business news in Nigeria. Financial news. Exclusive news & analysis. Deep research and intelligence reports. In-Depth Analysis.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        {/* <ProgressBar /> */}
        {children}
      </body>
    </html>
  );
}

