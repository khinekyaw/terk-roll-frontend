import VideoPost from "@/components/shared/video-post"
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
    <main className="flex justify-center items-center h-screen py-2">
      <VideoPost
        videoUrl="/test.mp4"
        authorId="authorId"
        locationId="locationid"
        description="Happy Happy #description"
        likesCount={1000200}
        commentsCount={1200}
        bookmarksCount={900}
        sharesCount={120000}
      />
    </main>
  )
}
