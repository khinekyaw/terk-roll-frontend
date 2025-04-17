import { Button } from "@/components/ui/button";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{locale: Locale}>;
};


export default function Home({params}:Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('common');

  return (
    <main>
      <Button>{t("login")}</Button>
    </main>
  );
} 