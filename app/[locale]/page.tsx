import VideoPostListing from "@/components/shared/video-post-listing"
import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <main className="flex h-screen">
      <VideoPostListing />
    </main>
  )
}
