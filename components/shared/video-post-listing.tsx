import { ChevronDown, ChevronUp } from "lucide-react"
import VideoPost from "./video-post"

const VideoPostListing = () => {
  return (
    <div className="flex w-full h-full px-5 py-2">
      <div className="justify-center items-center flex flex-1 lg:pr-20">
        <VideoPost
          videoUrl="https://videos.pexels.com/video-files/4057322/4057322-uhd_1440_2732_25fps.mp4"
          authorId="authorId"
          locationId="locationid"
          description="Happy Happy #description"
          likesCount={1000200}
          commentsCount={1200}
          bookmarksCount={900}
          sharesCount={120000}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <button disabled={true} className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/15 disabled:opacity-60 disabled:pointer-events-none">
          <ChevronUp className="w-8 h-8" />
        </button>
        <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/15">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}

export default VideoPostListing
