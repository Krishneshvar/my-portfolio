import { useState, useEffect } from "react"
import bootMessages from "./bootMessages.js"

export default function useBootSequence() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    if (currentMessage < bootMessages.length) {
      const randomDelay = Math.floor(Math.random() * (500 - 200 + 1)) + 200
      const timer = setTimeout(() => {
        setCurrentMessage(currentMessage + 1)
      }, randomDelay)
      return () => clearTimeout(timer)
    } else if (isLoading) {
      setIsLoading(false)
      setShowPrompt(true)
    }
  }, [currentMessage, isLoading])

  return { currentMessage, isLoading, showPrompt }
}
