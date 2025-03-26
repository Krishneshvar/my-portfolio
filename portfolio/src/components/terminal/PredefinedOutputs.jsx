const help = () => {
  const helpText = [
    "Self explanatory commands:",
    "about",
    "skills",
    "projects",
    "contact",
    "resume",
    "education",
    "experience",
    "certifications",
    " ",
    "help  : Display this help message",
    "echo  : Display the input text",
    "clear : Clear the terminal",
  ] 
  return (
    <>
      {helpText.map((text, index) => (
        <div key={index} className="flex flex-wrap mb-1">
          <pre>{text}</pre>
          {/* {text} */}
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
    "Web Technologies:",
    "HTML, CSS, JavaScript, Node.js",
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

const about = () => {
  return (
    <>
      <div className="mb-1">
        <pre>
          Krishneshvar is a software developer with experience in web development.
        </pre>
      </div>
    </>
  )
}

export { about, help, skills }
