import React, { useRef, useState, useEffect } from 'react'

const Hero = () => {

    
    const videoRef = useRef(null)
    
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const [text, setText] = useState("")
    const [charIndex, setCharIndex] = useState(0) 
    const [wordIndex, setWordIndex] = useState(0)
    
    const words = [
      " 120M+ Annual Visitors",
"350+ Global Brands",
"40M International Tourists",
"4.5 Avg Visitor Hours",
  "world-class entertainment",
  "luxury experiences",
  "premium lifestyle",
  "modern shopping",
]
    useEffect(() => {

  const currentWord = words[wordIndex]

  if (charIndex < currentWord.length) {

    const timeout = setTimeout(() => {
      setText((prev) => prev + currentWord[charIndex])
      setCharIndex((prev) => prev + 1)
    }, 80)

    return () => clearTimeout(timeout)

  } else {

    const wordTimeout = setTimeout(() => {
      setText("")
      setCharIndex(0)

      setWordIndex((prev) =>
        prev === words.length - 1 ? 0 : prev + 1
      )

    }, 1500)

    return () => clearTimeout(wordTimeout)
  }

}, [charIndex, wordIndex])
  
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  
  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }


  const handleTimeUpdate = () => {
    const percentage =
      (videoRef.current.currentTime / videoRef.current.duration) * 100

    setProgress(percentage)
  }

  const handleSeek = (e) => {
    const seekTime =
      (e.target.value / 100) * videoRef.current.duration

    videoRef.current.currentTime = seekTime
    setProgress(e.target.value)
  }

  return (
    <section className="bg-gray-100 p-4 md:p-10">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 rounded-3xl bg-violet-100 p-6 md:p-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 md:mb-14 animate-fadeUp">
            Imperial Center
          </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-20 md:mb-32">
          Experience luxury shopping, premium dining, and{" "}

          <span className="text-black font-medium">
           {text}
          </span>
         </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded">
              Explore Mall
            </button>

            <button className="border border-black px-6 py-3 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-10/12 relative">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline 
            onClick={handleVideoClick}
            onTimeUpdate={handleTimeUpdate}
           className="w-full h-[40vh] md:h-[70vh] rounded-2xl object-cover cursor-pointer"
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>

         <button
            onClick={toggleMute}
            className="absolute bottom-14 right-5 bg-black/60 text-white px-4 py-2 rounded-full"
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] cursor-pointer accent-white"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero