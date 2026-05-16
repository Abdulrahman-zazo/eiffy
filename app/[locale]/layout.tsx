// app/[locale]/layout.tsx
import type { Metadata, Viewport } from "next";
import { Almarai, DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/i18n.config";

import "../globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { baseUrl } from "@/lib/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", 
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", 
  display: "swap",
});

// ✅ الجديد
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.root" });

  return {
    title: {
      default: t("title"),
      template: t("template"),
    },
    description: t("description"),
    metadataBase: new URL(baseUrl),
    keywords: t.raw("keywords"),
    authors: [{ name: "Eiffelya Restaurant" }],
    
    manifest: "/manifest.json", // ✅

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },

    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SY" : "en_US",
      url: `${baseUrl}/${locale}`,
      siteName: "Eiffelya Restaurant",
      title: t("ogTitle"),
      description: t("description"),
      images: [
        {
          url: "/images/og-main.jpg",
          width: 1200,
          height: 630,
          alt: locale === "ar" ? "مطعم إيفيليا حلب" : "Eiffelya Restaurant Aleppo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("description"),
      images: ["/images/og-main.jpg"],
    },

    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "48x48",
        },
        {
          url: "/icon0.svg",
          type: "image/svg+xml",
          sizes: "any",
        },
        {
          url: "/icon1.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          url: "/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: "/apple-icon.png",
    },
  };
}
export const viewport: Viewport = {
  themeColor: "#2a2016",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // التأكد من أن اللغة مدعومة
  if (!locales.includes(locale)) {
    notFound();
  }
    const isArabic = locale === "ar";

  // جلب النصوص
  const messages = await getMessages({ locale });

  // بيانات Schema للمطعم
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
     name: isArabic ? "مطعم إيفيليا" : "Eiffelya Restaurant",
 image: `${baseUrl}/images/og-main.jpg`,
url: `${baseUrl}/${locale}`,
    telephone: "+963946100111",
    address: {
      "@type": "PostalAddress",
      streetAddress: "منطقة الموكامبو بجانب مسبح الاتحاد",
      addressLocality: "Aleppo",
      addressCountry: "SY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.21642228494445", // إحداثيات المطعم الحقيقية لخرائط جوجل
      longitude: "37.12402448057853",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:59",
    },
   menu: `${baseUrl}/menu`,
    servesCuisine: ["American", "Italian", "International"],
    priceRange: "$$$",
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "150",
    //   bestRating: "5",
    // },

    acceptsReservations: "True",

    paymentAccepted: "Cash, Credit Card",

    hasMap: "https://maps.google.com/?q=36.21642,37.12402",

    sameAs: [
     "https://www.facebook.com/eiffelyasyria21"
    ],
  };

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <meta name="apple-mobile-web-app-title" content="eiffelya" />
        
        {/* ✅ preload الصورة الرئيسية */}
        <link
          rel="preload"
        
          as="image"
          href="/images/hero.webp" 
          fetchPriority="high"  
        />
      </head>
      <body
        className={[
          dmSans.variable,
          playfairDisplay.variable,
          almarai.variable,
          isArabic ? "font-almarai" : "font-sans",
          "antialiased",
        ].join(" ")}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <ScrollToTop />
            <Analytics />
          </div>
        </NextIntlClientProvider>

        {/* ✅ خارج Provider وقبل إغلاق body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
