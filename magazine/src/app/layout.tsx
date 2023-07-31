import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./Navbar";
import Script from "next/script";
import { GoogleAnalytics } from "nextjs-google-analytics";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "MinorVersion",
  description: "Software Engineering & Applied Mathematics Magazine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics trackPageViews gaMeasurementId="G-WPDR9K3CYN" />
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WPDR9K3CYN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-WPDR9K3CYN');
        `}
      </Script> */}
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
