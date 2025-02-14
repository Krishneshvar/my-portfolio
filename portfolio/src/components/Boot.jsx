import { useState, useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import bootMessages from "./bootMessages.js"
import useBootSequence from "./useBootSequence.js"
import Prompt from "./Prompt.jsx"

export default function Boot() {
  const { currentMessage, isLoading, showPrompt } = useBootSequence()
  const [prompts, setPrompts] = useState([0])  // Track prompts by index

  // Automatically scroll to the bottom when a new prompt is added
  const terminalEndRef = useRef(null)
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView()
  }, [prompts])

  // Add new prompt
  const addPrompt = () => {
    setPrompts(prev => [...prev, prev.length])
  }

  const displayedMessages = useMemo(
    () => bootMessages.slice(0, currentMessage),
    [currentMessage]
  )

  return (
    <div className="bg-black text-white font-mono h-screen w-screen p-4 overflow-auto">
      <div className="h-full overflow-hidden relative">
        {isLoading && (
          <motion.div
            className="absolute bottom-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayedMessages.map((message, index) => (
              <motion.div
                key={index}
                className="mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                [<span
                  className={`${
                    message.status === "OK"
                      ? "text-green-500"
                      : message.status === "WARNING"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {message.status}
                </span>] {message.text}
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className={`flex flex-col justify-end h-full w-full ${showPrompt ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
          {prompts.map((index) => (
            <Prompt key={index} onEnter={addPrompt} />
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  )
}
