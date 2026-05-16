import { usePathname, useRouter } from "@/i18n/i18n.config";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (nextLocale: "en" | "ar") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center rounded-full border border-accent/30 bg-background/50 p-1">
      <button
        onClick={() => switchLang("en")}
        className={cn(
          "px-3 py-1 text-xs font-bold transition-all rounded-full",
          locale === "en" 
            ? "bg-accent text-primary-foreground shadow-sm" 
            : "text-accent hover:text-accent/70"
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLang("ar")}
        className={cn(
          "px-3 py-1 text-xs font-bold transition-all rounded-full",
          locale === "ar" 
            ? "bg-accent text-primary-foreground shadow-sm" 
            : "text-accent hover:text-accent/70"
        )}
      >
        AR
      </button>
    </div>
  );
}