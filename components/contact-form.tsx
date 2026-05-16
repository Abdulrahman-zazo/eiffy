// components/contact-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const departments = [
  { labelKey: "fastFood", phone: "963948300333" },
  { labelKey: "restaurant", phone: "963946100111" },
  { labelKey: "management", phone: "963941172242" },
];

export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const locale = useLocale();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    department: "",
    message: "",
  });

  const selectedDept = departments.find((d) => d.phone === form.department);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDept) return;

    const message = [
      `*${t("whatsapp.header")}*`,
      ``,
      `*${t("whatsapp.name")}* ${form.fullName}`,
      `*${t("whatsapp.phone")}* ${form.phone}`,
      `*${t("whatsapp.message")}*`,
      form.message,
    ].join("\n");

    const url = `https://wa.me/${selectedDept.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const isValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.department &&
    form.message.trim();

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
<div className="flex flex-row gap-2">

      {/* الاسم الكامل */}
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="fullName">{t("fields.fullName")}</Label>
        <Input
        className="placeholder:text-foreground/30"
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
         
        />
   
        </div>
            {/* اختيار الجهة */}
      <div className="flex flex-col gap-2 w-full">
        <Label>{t("fields.department")}</Label>
        <Select
        
          onValueChange={(val) =>
            setForm((prev) => ({ ...prev, department: val }))
          }
        >
          <SelectTrigger     className={locale === "ar" ? "text-right w-full  flex flex-row-reverse placeholder:text-foreground/30" : "text-left placeholder:text-foreground/30 w-full"}>
            <SelectValue className="placeholder:text-foreground/30" />
          </SelectTrigger> 
          <SelectContent >
            {departments.map((dept) => (
                <SelectItem key={dept.phone} value={dept.phone}>
                {t(`fields.departments.${dept.labelKey}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
            </div>
   </div>
      {/* رقم الهاتف */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">{t("fields.phone")}</Label>
        <Input
        
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
       
          dir="ltr"
          className={locale === "ar" ? "text-right placeholder:text-foreground/30" : "text-left placeholder:text-foreground/30"}
        />
      </div>



      {/* الرسالة */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{t("fields.message")}</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="min-h-32"
          required
          
        />
      </div>

      {/* Preview */}
      {/* {isValid && (
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            {t("preview.title")}
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground" dir="rtl">
            <p>
              <span className="font-medium text-foreground">
                {t("whatsapp.name")}
              </span>{" "}
              {form.fullName}
            </p>
            <p>
              <span className="font-medium text-foreground">
                {t("whatsapp.phone")}
              </span>{" "}
              {form.phone}
            </p>
            <p>
              <span className="font-medium text-foreground">
                {t("preview.to")}
              </span>{" "}
              {selectedDept && t(`fields.departments.${departments.find(d => d.phone === selectedDept.phone)?.labelKey}`)}
            </p>
            <p className="mt-1 border-t border-border pt-2">{form.message}</p>
          </div>
        </div>
      )} */}

      {/* زر الإرسال */}
      <Button
        type="submit"
        size="lg"
        disabled={!isValid}
        className="w-full gap-2 bg-primary text-white hover:bg-primary/80 disabled:opacity-40 md:w-auto"
      >
        <MessageCircle className="size-4" />
        {t("submit")}
      </Button>
    </form>
  );
}