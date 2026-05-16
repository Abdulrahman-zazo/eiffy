// i18n.config.ts
export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'ar';

export type Locale = (typeof locales)[number];

import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
