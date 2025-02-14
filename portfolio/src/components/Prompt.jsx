import { useRef, useEffect } from "react"

function Prompt({ onEnter }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      onEnter()
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
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Prompt
