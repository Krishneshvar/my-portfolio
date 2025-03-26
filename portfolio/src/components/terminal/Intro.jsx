const Intro = () => {
  return (
    <div className="text-blue-500 mb-6">
      <pre className="whitespace-pre-wrap break-words text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] leading-tight">
        {`
██╗  ██╗██╗   
██║░░██║██║   
███████║██║   
██╔══██║██║██╗
██║░░██║██║╚█║
╚═╝  ╚═╝╚═╝ ╚╝
`}
      </pre>

      <pre className="whitespace-pre-wrap break-words text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] leading-tight">
        {`
██╗██╗███╗   ███╗
██║╚█║████╗░████║
██║░╚╝██╔████╔██║
██║░░░██║╚██╔╝██║
██║░░░██║░╚═╝░██║
╚═╝   ╚═╝     ╚═╝
`}
      </pre>

      <pre className="whitespace-pre-wrap break-words text-[0.4rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-md xl:text-lg leading-tight">
        {`
██╗░░██╗██████╗░██╗░██████╗██╗░░██╗███╗░░██╗███████╗░██████╗██╗░░██╗██╗░░░██╗░█████╗░██████╗░
██║░██╔╝██╔══██╗██║██╔════╝██║░░██║████╗░██║██╔════╝██╔════╝██║░░██║██║░░░██║██╔══██╗██╔══██╗
█████═╝░██████╔╝██║╚█████╗░███████║██╔██╗██║█████╗░░╚█████╗░███████║╚██╗░██╔╝███████║██████╔╝
██╔═██╗░██╔══██╗██║░╚═══██╗██╔══██║██║╚████║██╔══╝░░░╚═══██╗██╔══██║░╚████╔╝░██╔══██║██╔══██╗
██║░╚██╗██║░░██║██║██████╔╝██║░░██║██║░╚███║███████╗██████╔╝██║░░██║░░╚██╔╝░░██║░░██║██║░░██║
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝
`}
      </pre>

      <p className="text-white mt-4">Enter "help" command for more information.</p>
    </div>
  )
}

export default Intro
