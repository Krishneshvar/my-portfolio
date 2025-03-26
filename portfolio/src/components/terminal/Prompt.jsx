import { useRef, useEffect, useState } from "react"
import PowerlinePrompt from "./PowerlinePrompt"

function Prompt({ onEnter, commandHistory }) {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      // if (inputValue.trim() === "") return

      onEnter(inputValue.trim())
      setInputValue("")
      setHistoryIndex(-1)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      if (historyIndex + 1 < commandHistory.length) {
        setHistoryIndex((prev) => prev + 1)
        setInputValue(commandHistory[commandHistory.length - 1 - (historyIndex + 1)])
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      if (historyIndex > 0) {
        setHistoryIndex((prev) => prev - 1)
        setInputValue(commandHistory[commandHistory.length - 1 - (historyIndex - 1)])
      } else {
        setHistoryIndex(-1)
        setInputValue("")
      }
    }
  }

  return (
    <div className="flex flex-row w-full">
      <PowerlinePrompt path="~/portfolio" git={{ branch: "main", status: "clean" }} />
        <input
          type="text"
          className="flex-grow bg-transparent text-white outline-none ml-6"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default Prompt
