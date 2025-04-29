import Link from "next/link"
import React from "react"
import { FaHeart } from "react-icons/fa6"

import { cn } from "@/lib/utils"
import { FaBookmark, FaShare } from "react-icons/fa"
import { IoChatbubbleEllipses, IoLocationSharp } from "react-icons/io5"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SocialActionButton from "./social-action-button"

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
    <div className={cn("relative items-end gap-x-4 w-fit h-full flex")}>
      <div className="rounded-2xl overflow-hidden relative w-full h-full">
        <video
          src={videoUrl}
          playsInline={true}
          autoPlay={true}
          controls={true}
          className="w-full h-full object-contain"
        ></video>
        <div className="absolute bottom-0 p-3 left-0 gap-y-1 flex flex-col right-0 text-[#ffffff] typo-body-sm bg-gradient-to-b from-transparent to-[#00000060]">
          <Link
            href={"/locations/" + locationId}
            className="flex gap-x-1 w-fit items-center bg-[#00000040] rounded py-0.5 px-1"
          >
            <IoLocationSharp />
            <p>{locationId}</p>
          </Link>
          <Link
            href={"/profiles/" + authorId}
            className="font-medium hover:underline"
          >
            {authorId}
          </Link>
          <div>
            <p>{description}</p>
          </div>
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
