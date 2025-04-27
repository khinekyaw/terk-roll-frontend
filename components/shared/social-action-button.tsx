import React from "react"
import { IconType } from "react-icons"

function formatMetric(num: number): string {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + 'K';
  return num.toString();
}

const SocialActionButton = ({
  icon: Icon,
  actionCount,
}: {
  icon: IconType
  actionCount: number
}) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-12 h-12 rounded-full mb-1.5 bg-muted flex items-center justify-center">
        <Icon className="w-6 h-6 shrink-0" />
      </button>
      <p className="typo-body-xs font-semibold">{formatMetric(actionCount)}</p>
    </div>
  )
}

export default SocialActionButton
