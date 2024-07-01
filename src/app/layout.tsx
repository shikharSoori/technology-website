
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Sarabun } from "next/font/google";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Soori Technology",
  description:
    "Soori Technology is a software development company based in Kathmandu,Nepal. ",
};
const sarabun_init = Sarabun({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "---font-sarabun",
});
type Props = {
  children: React.ReactNode;
};
export const dynamic = "auto";
export default function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en">
        <body className={sarabun_init.variable}>
          <Header />

          <main>{children}</main>

          <Footer />
          <Script
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js"
            strategy="lazyOnload"
            onLoad={() => {
              // Mark the package as ready
             
            }}
          />
        </body>
      </html>
    </>
  );
}
