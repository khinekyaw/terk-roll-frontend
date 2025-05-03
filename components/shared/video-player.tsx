"use client"

import React, { useRef, useState } from "react"
import ReactPlayer, { ReactPlayerProps } from "react-player"
import { Slider as AudioSlider } from "@/components/ui/video-player-audio-slider"
import { Slider as VideoSlider } from "@/components/ui/video-player-slider"
import { Volume2, VolumeX } from "lucide-react"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"

export type VideoPlayerProps = ReactPlayerProps & {
  className?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  className,
  style,
  ...props
}) => {
  const playerRef = useRef<ReactPlayer>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [played, setPlayed] = useState(0)
  const [muted, setMuted] = useState(false)
  const [seeking, setSeeking] = useState(false)

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played)
    }
  }

  const handleSeekMouseDown = () => {
    setSeeking(true)
  }

  const handleSeekChange = (value: number[]) => {
    setPlayed(value[0])
  }

  const handleSeekMouseUp = (value: number[]) => {
    setSeeking(false)
    playerRef.current?.seekTo(value[0], "fraction")
  }

  const togglePlay = () => {
    setPlaying(!playing)
  }

  return (
    <div
      className={cn("relative flex group/video-player", className)}
      style={style}
    >
      <ReactPlayer
        ref={playerRef}
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        {...props}
      />

      {/* Volume Control */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-2 bg-black/60 px-2 py-1 rounded group-hover/video-player:opacity-100 opacity-0 transition-opacity">
        <button onClick={() => setMuted(!muted)} className="text-background">
          {muted || volume === 0 ? (
            <VolumeX className="text-white" />
          ) : (
            <Volume2 className="text-white" />
          )}
        </button>
        <AudioSlider
          min={0}
          max={1}
          step={0.01}
          value={[volume]}
          onValueChange={(val) => {
            setVolume(val[0])
            setMuted(val[0] === 0)
          }}
          className="w-16"
        />
      </div>

      {/* Seek Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <VideoSlider
          min={0}
          max={1}
          step={0.001}
          value={[played]}
          onValueChange={handleSeekChange}
          onValueCommit={handleSeekMouseUp}
          onPointerDown={handleSeekMouseDown}
          className=""
        />
      </div>

      {/* Overlay */}
      <div
        onClick={togglePlay}
        className="absolute inset-0 cursor-pointer"
      />
    </div>
  )
}

export default dynamic(() => Promise.resolve(VideoPlayer), {
  ssr: false,
})
