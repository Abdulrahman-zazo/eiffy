

"use client" 
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/data"

export function SiteFooter() {
  const t = useTranslations("Footer")
  const currentYear = new Date().getFullYear()

  


  return (
    <footer className="bg-background text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
              Eiffelya
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-80 text-justify">
              {t("description")}
            </p>
            <div className="mt-6 flex gap-4 items-center" >
              {/* <a href={siteConfig.instagram} target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                <InstagramIcon className="size-5" />
              </a> */}
              <a href={siteConfig.socials.facebook} target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                <FacebookIcon className="size-5" />
              </a>
                  <a href={siteConfig.socials.whatsapp} target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
              </a>
                   <a href={siteConfig.socials.map} target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                <MapPin className="size-5" />
              </a>
            </div>

          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t("locationTitle")}
            </h3>
            <div className="mt-4 flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 opacity-50" />
              <div>
                <p className="text-sm font-medium opacity-90">{siteConfig.name}</p>
                <p className="text-xs opacity-60 leading-relaxed">{t("address")}</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t("navTitle")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><Link href="/about" className="text-sm opacity-70 hover:opacity-100">{t("links.story")}</Link></li>
              <li><Link href="/menu" className="text-sm opacity-70 hover:opacity-100">{t("links.menu")}</Link></li>
              
              <li><Link href="/contact" className="text-sm opacity-70 hover:opacity-100">{t("links.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t("contactTitle")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                  <Phone className="size-4 shrink-0" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 border-t border-primary-foreground/10 pt-6">
              <p className="text-xs font-medium uppercase tracking-wider opacity-60">
                {t("newsletter")}
              </p>
              <p className="mt-1 text-xs opacity-50">
                {t("newsletterDesc")}
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs opacity-50">
            &copy; {currentYear} EIFFELYA. {t("rights")}
          </p>
     <Link

  href="https://nsdev.no/en"
  target="_blank"
  rel="noopener noreferrer"   
  className="flex items-center gap-1.5 text-sm text-foreground 
             transition-colors duration-200 hover:text-foreground"
>
  Developed by NSDev Team

</Link>

        </div>
      </div>
    </footer>
  )
}

// أيقونات بسيطة (يمكنك استبدالها بـ Lucide أو أي مكتبة أخرى)
function InstagramIcon(props: any) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  )
}