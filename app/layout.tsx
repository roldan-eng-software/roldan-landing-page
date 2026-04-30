import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const ogImageUrl = "/og-image.png";

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
  title: "Roldan Eng Software | Desenvolvimento Fullstack · Landing Pages e Sistemas Web",
  description: "Desenvolvimento fullstack para landing pages, sistemas e aplicações web. Atendo pequenas empresas e autônomos em São Carlos, São Paulo e todo o Brasil.",
  keywords: ["desenvolvedor fullstack", "landing page", "sistema web", "React", "Next.js", "Node.js", "São Carlos", "São Paulo"],
  authors: [{ name: "Sandro Roldan" }],
  alternates: {
    canonical: siteUrl,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  openGraph: {
    title: "Roldan Eng Software | Desenvolvimento Fullstack",
    description: "Landing pages, sistemas e aplicações web modernas para pequenas empresas e autônomos.",
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
    title: "Roldan Eng Software | Desenvolvimento Fullstack",
    description: "Landing pages, sistemas e aplicações web modernas para pequenas empresas e autônomos.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Roldan Eng Software",
              "description": "Desenvolvimento fullstack para landing pages, sistemas e aplicações web.",
              "url": siteUrl,
              "email": "roldan.eng.software@gmail.com",
              "telephone": "+5516981442301",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Carlos",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.linkedin.com/in/sandro-roldan-b8721a3b5/",
                "https://github.com/roldan-eng-software"
              ]
            })
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
