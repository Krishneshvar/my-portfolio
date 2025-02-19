import { useState, useEffect, useRef, useMemo } from "react"
import bootMessages from "./bootMessages.js"
import useBootSequence from "./useBootSequence.js"
import Prompt from "./Prompt.jsx"
import Intro from "./Intro.jsx"

export default function Boot() {
  const { currentMessage, isLoading, showPrompt } = useBootSequence()
  const [commandHistory, setCommandHistory] = useState([])
  const [commandOutputs, setCommandOutputs] = useState([])
  const terminalEndRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [commandOutputs])

  const addPrompt = (newCommand) => {
    if (newCommand.trim() !== "") {
      setCommandHistory((prev) => [...prev, newCommand])
      setCommandOutputs((prev) => [...prev, { type: "command", content: newCommand }])
      // Here you would process the command and add its output
      // For now, we'll just echo the command
      setCommandOutputs((prev) => [...prev, { type: "output", content: `Echo: ${newCommand}` }])
    }
  }

  const displayedMessages = useMemo(() => bootMessages.slice(0, currentMessage), [currentMessage])

  return (
    <div className="p-4 h-full">
      {isLoading && (
        <div className="mb-4">
          {displayedMessages.map((message, index) => (
            <div key={index} className="mb-1">
              [
              <span
                className={
                  message.status === "OK"
                    ? "text-green-500"
                    : message.status === "WARNING"
                      ? "text-yellow-500"
                      : "text-red-500"
                }
              >
                {message.status}
              </span>
              ] {message.text}
            </div>
          ))}
        </div>
      )}
      <div className={`transition-opacity duration-500 ${showPrompt ? "opacity-100" : "opacity-0"}`}>
        <Intro />
        {commandOutputs.map((output, index) => (
          <div key={index} className="mb-1">
            {output.type === "command" ? (
              <div className="flex">
                <span className="text-green-500">user</span>
                <span className="text-white">:</span>
                <span className="text-blue-500">~</span>
                <span className="text-white"> $ </span>
                <span className="ml-2">{output.content}</span>
              </div>
            ) : (
              <div className="ml-2">{output.content}</div>
            )}
          </div>
        ))}
        {showPrompt && <Prompt onEnter={addPrompt} commandHistory={commandHistory} />}
      </div>
      <div ref={terminalEndRef} />
    </div>
  )
}
