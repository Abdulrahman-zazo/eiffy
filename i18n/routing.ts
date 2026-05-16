import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // pathnames: {
  //   "/": "/",
  //   "/data-deletion-policy": {
  //     ar: "/سياسة-حذف-البيانات",
  //     no: "/retningslinjer-for-datasletting",
  //   },
  //   "/privacy-policy": {
  //     ar: "/سياسة-الخصوصية",
  //     no: "/personvernerklaering",
  //   },
  //   "/refund-policy": {
  //     ar: "/سياسة-الاسترجاع",
  //     no: "/refusjonspolicy",
  //   },
  //   "/terms-of-services": {
  //     ar: "/شروط-الخدمة",
  //     no: "/brukervilkaar",
  //   },
  //   "/user-guide": {
  //     ar: "/دليل-المستخدم",
  //     no: "/brukerveiledning",
  //   },
  //   "/ai": {
  //     ar: "/الذكاء-الاصطناعي",
  //     no: "/kunstig-intelligens",
  //   },
  // },
  localeDetection: true,
  localePrefix: "always",
});