import { cn } from "@/lib/utils"
import React from "react"
import { FaHeart } from "react-icons/fa6"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SocialActionButton from "./social-action-button"

import Link from "next/link"
import { FaBookmark, FaShare } from "react-icons/fa"
import { IoChatbubbleEllipses } from "react-icons/io5"

interface VideoPostProps {
  videoUrl: string
  authorId: string
  locationId: string
  description: string
  likesCount: number
  commentsCount: number
  bookmarksCount: number
  sharesCount: number
}

const VideoPost: React.FC<VideoPostProps> = ({
  videoUrl,
  authorId,
  locationId,
  description,
  likesCount,
  commentsCount,
  bookmarksCount,
  sharesCount,
}) => {
  return (
    <div className={cn("relative items-end gap-x-4 max-w-[50vw] w-full h-full flex")}>
      <div className="rounded-3xl overflow-hidden border relative w-full h-full">
        <video
          src={videoUrl}
          autoPlay={true}
          playsInline={true}
          controls={true}
          className="w-full h-full object-contain"
        ></video>
        <div className="absolute">
          <p>{locationId}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="w-fit flex gap-2 flex-col items-center">
        <Link href={"/profiles/" + authorId} className="mb-2">
          <Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Avatar>
        </Link>

        <SocialActionButton icon={FaHeart} actionCount={likesCount} />
        <SocialActionButton
          icon={IoChatbubbleEllipses}
          actionCount={commentsCount}
        />
        <SocialActionButton icon={FaBookmark} actionCount={bookmarksCount} />
        <SocialActionButton icon={FaShare} actionCount={sharesCount} />
      </div>
    </div>
  )
}

export default VideoPost
