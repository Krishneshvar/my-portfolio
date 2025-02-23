import { useState, useEffect, useRef, useMemo } from "react"
import bootMessages from "./bootMessages.js"
import useBootSequence from "./useBootSequence.js"
import Prompt from "./Prompt.jsx"
import Intro from "./Intro.jsx"
import { help, skills } from "./PredefinedOutputs.jsx"
import PowerlinePrompt from "./PowerlinePrompt.jsx"; 

export default function Boot() {
  const { currentMessage, isLoading, showPrompt } = useBootSequence()
  const [commandHistory, setCommandHistory] = useState([])
  const [commandOutputs, setCommandOutputs] = useState([])
  const terminalEndRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [commandOutputs])

  const addPrompt = (newCommand) => {
    const trimmedCommand = newCommand.trim();
  
    if (trimmedCommand) {
      setCommandHistory((prev) => [...prev, trimmedCommand]);
    }
  
    if (trimmedCommand === "clear") {
      setCommandOutputs([]); // ✅ Clear the terminal
    } else {
      setCommandOutputs((prev) => [
        ...prev,
        { type: "command", content: trimmedCommand }, // ✅ Store entered command
        trimmedCommand === "help"
          ? { type: "output", content: help() } // ✅ Correctly show help
          : trimmedCommand === "skills"
          ? { type: "output", content: skills() } // ✅ Correctly show skills
          : { type: "output", content: `${trimmedCommand}: Command not found` }, // Default case
      ]);
    }
  
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };  

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
                  message.status === "OK" ? "text-green-500" : message.status === "WARNING"
                      ? "text-yellow-500" : "text-red-500"
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
          <div key={index} className="mb-3"> 
            {output.type === "command" ? (
              <div className="flex items-center">
                <PowerlinePrompt path="~/portfolio" git={{ branch: "main", status: "clean" }} />
                <span className="ml-2">{output.content}</span> {/* ✅ Command now appears next to prompt */}
              </div>
            ) : (
              <div className="ml-6 text-gray-300">{output.content}</div>
            )}
          </div>
        ))}
        {showPrompt && <Prompt onEnter={addPrompt} commandHistory={commandHistory} />}
      </div>
      <div ref={terminalEndRef} />
    </div>
  )
}
