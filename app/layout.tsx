import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { gaMeasurementId } from "@/lib/analytics";
import { siteUrl } from "@/lib/site";
import { buildProfessionalServiceJsonLd, seoProfile } from "@/lib/seo";
import "./globals.css";

const ogImageUrl = seoProfile.ogImage;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoProfile.title,
  description: seoProfile.description,
  keywords: [...seoProfile.topics],
  authors: [{ name: "Sandro Roldan" }],
  alternates: {
    canonical: seoProfile.canonicalUrl,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  openGraph: {
    title: seoProfile.title,
    description: seoProfile.description,
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName: "Roldan Eng Software",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Roldan Eng Software - Desenvolvimento fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoProfile.title,
    description: seoProfile.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <Script
          id="google-tag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="lazyOnload"
        />
        <Script id="google-tag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildProfessionalServiceJsonLd())
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
