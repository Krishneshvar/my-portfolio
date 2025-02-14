import { useRef, useEffect, useState } from "react"

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
      onEnter(inputValue)
      setInputValue("")  // Clear input after Enter
      setHistoryIndex(-1)  // Reset index when a new command is entered
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setInputValue("")
      }
    }
  }

  return (
    <div className="flex flex-row items-start w-screen">
      <div>
        <span className="text-green-500">user</span>
        <span className="text-white">:</span>
        <span className="text-blue-500">~</span>
        <span className="text-white"> $ </span>
      </div>
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-white ml-2"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Prompt
