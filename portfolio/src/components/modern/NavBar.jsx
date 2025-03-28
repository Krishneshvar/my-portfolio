export default function NavBar() {
  return (
    <nav className="fixed top-5 flex flex-row justify-around items-center gap-6 h-16 max-w-[50%] w-full backdrop-blur-lg bg-[#537FE7] text-white p-4 rounded-lg shadow-lg">
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative text-lg transition-all hover:text-[#E9F8F9] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[#E9F8F9] after:transition-all after:duration-300 hover:after:w-full"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
