import localFont from "next/font/local";
import "./globals.scss";
import { Navbar } from "../components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cilla Healthcare Services",
  description:
    "Cilla Healthcare Services is a leading provider of home care in Alberta, renowned for our commitment to enhancing the quality of life for individuals of all ages.",
  icons: {
    icon: "/cilla-logo.svg", // path is relative to /public
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
