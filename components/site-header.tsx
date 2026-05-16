"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

import { useTranslations } from "next-intl"
import { usePathname } from "@/i18n/i18n.config"
import { LanguageSwitcher } from "./LocaleSwitcherSelect"





const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  // { key: "locations", href: "/locations" },
  { key: "menu", href: "/menu" },
  { key: "contact", href: "/contact" },
]


export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const t = useTranslations("header")

  return (
   <header className="sticky top-0 z-50 w-full border-b border-accent/20 bg-[#0f344a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 lg:px-8">
        
        {/* 1. Logo (Left Side) */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/eiffelya-logo.png"
              alt="Eiffelya Logo"
              width={120} // كبّرته قليلاً ليتناسب مع الارتفاع الجديد
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. Desktop Nav (Center) */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-all hover:text-accent",
                pathname === item.href ? "text-accent underline underline-offset-8" : "text-white/80"
              )}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        {/* 3. Desktop Actions (Right Side) */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          <LanguageSwitcher />

          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-primary-foreground rounded-full px-6"
          >
            <Link href="/contact">{t("cta.book")}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden flex-1 justify-end">

        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full max-w-sm">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex flex-col gap-6 pt-6">
              
              {/* Mobile Header */}
              <div className="flex flex-col p-10 text-center border-b border-accent">
                <Link
                  href="/"
                  className="font-serif text-3xl font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {siteConfig.name}
                </Link>
                <p>{t("mobile.subtitle")}</p>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-secondary",
                      pathname === item.href
                        ? "text-accent"
                        : "text-foreground"
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-4 px-6">
                <LanguageSwitcher />

                <Button asChild onClick={() => setOpen(false)}>
                  <Link href="/contact">{t("cta.book")}</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
}