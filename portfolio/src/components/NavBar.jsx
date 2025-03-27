
export default function NavBar() {
  return (
    <div className="flex flex-row justify-around items-center gap-6 h-16 max-w-[50%] w-full backdrop-blur-lg bg-[#393E46] text-[#EEEEEE] p-4 mt-2 rounded-lg">
      <a href="#home" className="text-lg">
        Home
      </a>
      <a href="#about" className="text-lg">
        About
      </a>
      <a href="#projects" className="text-lg">
        Projects
      </a>
      <a href="#contact" className="text-lg">
        Contact
      </a>
    </div>
  );
}
