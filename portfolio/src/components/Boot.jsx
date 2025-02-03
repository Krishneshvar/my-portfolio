import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import bootMessages from "./bootMessages.js"
import Prompt from "./Prompt.jsx"

export default function Boot() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isBooting, setIsBooting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    if (currentMessage < bootMessages.length) {
      const randomDelay = Math.floor(Math.random() * (1000 - 200 + 1)) + 200 // Random delay between 200 and 1500 ms
      const timer = setTimeout(() => {
        setCurrentMessage(currentMessage + 1)
      }, randomDelay)
      return () => clearTimeout(timer)
    } else if (isLoading) {
      setIsLoading(false)
      setIsBooting(true)
    }
  }, [currentMessage, isLoading])

  useEffect(() => {
    if (isBooting && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(progress + 1)
      }, 30)
      return () => clearTimeout(timer)
    } else if (isBooting && progress === 100) {
      const timer = setTimeout(() => {
        setIsBooting(false)
        setShowHello(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isBooting, progress])

  return (
    <div className="bg-black text-white font-mono h-screen w-screen p-4 overflow-hidden">
      {isLoading && (
        <div className="h-full overflow-hidden relative">
          <div className="absolute bottom-0 w-full"
          >
            {bootMessages.slice(0, currentMessage).map((message, index) => (
              <div key={index} className="mb-1">
                [<span className={`${message.status === "OK" ? "text-green-500" : message.status === "WARNING" ? "text-yellow-500" : "text-red-500"}`}>
                  {message.status}
                </span>] {message.text}
              </div>
            ))}
          </div>
        </div>
      )}
      {isBooting && (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl mb-4">Rendering profile...</div>
          <div className="w-64 h-4 bg-gray-700 overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      )}
      {showHello && (
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl"
          >
            <Prompt />
          </motion.div>
        </div>
      )}
    </div>
  )
}
