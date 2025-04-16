import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="w-[120px] h-[36px] relative">
      <Image
        src="/logo.svg"
        alt="Trek Roll Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  )
}

export default Logo