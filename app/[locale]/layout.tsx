import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "TrekRoll",
  description: "TikTok-inspired short video travel platform",
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar />
            <main className="pl-[72px] lg:pl-[240px]">
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
