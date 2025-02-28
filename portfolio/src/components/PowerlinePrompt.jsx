import { User, Folder, GitGraphIcon as Git   } from 'lucide-react'

export default function PowerlinePrompt({ path = "~", git = { branch: "main", status: "clean" } }) {
  return (
    <div className="flex items-center text-sm">
      <div className="flex">
        <div className="flex items-center bg-blue-600 text-white pl-2 pr-6 relative border-radius-l">
          <User size={14} className="mr-1" />
          <span>user</span>
        </div>

        <div className="flex items-center bg-purple-600 text-white pl-2 pr-1 relative -ml-3">
          <Folder size={14} className="mr-1" />
          <span>{path}</span>
        </div>

        <div className="w-0 h-0 border-y-16 border-y-transparent border-l-16 border-l-purple-600"></div>
      </div>
    </div>
  )
}
