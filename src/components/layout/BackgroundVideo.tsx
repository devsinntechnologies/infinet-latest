"use client"
import React from 'react'

const BackgroundVideo = () => {
  return (
    <div>
          <video autoPlay loop muted className="background-video w-[100vw] h-[100vh] object-cover">
                <source src="/video.mp4" type="video/mp4" />
            </video>
    </div>
  )
}

export default BackgroundVideo