const help = () => {
  const helpText = [
    "about          : Display information about Krishneshvar",
    "skills         : Display Krishneshvar's skills",
    "projects       : Display Krishneshvar's projects",
    "contact        : Display contact information",
    "resume         : Display Krishneshvar's resume",
    "education      : Display Krishneshvar's education",
    "experience     : Display Krishneshvar's experience",
    "certifications : Display Krishneshvar's certifications",
    "help           : Display this help message",
    "echo           : Display the input text",
    "clear          : Clear the terminal",
  ] 
  return (
    <>
      {helpText.map((text, index) => (
        <div key={index} className="mb-1">
          <pre>{text}</pre>
        </div>
      ))}
    </>
  )
}

const skills = () => {
  const skillSet = [
    "Programming Languages:",
    "C, C++, Java, Python",
    " ",
    "Frameworks:",
    "React, Express.js",
    " ",
    "Databases:",
    "PostgreSQL, MySQL",
    " ",
    "Tools:",
    "Git, Docker",
  ]
  return (
    <>
      {skillSet.map((text, index) => (
        <div key={index} className="mb-1">
          <pre>{text}</pre>
        </div>
      ))}
    </>
  )
}

export { help, skills }
