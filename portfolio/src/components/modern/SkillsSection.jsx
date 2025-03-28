import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaLinux, FaDatabase, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiPython, SiC, SiCplusplus, SiFigma } from "react-icons/si";

export default function SkillsSection() {
  const skills = {
    Languages: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
    ],
    Frontend: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    Backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
    ],
    Database: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    Tools: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Figma", icon: SiFigma },
    ],
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#537FE7] rounded-t-[2rem] p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="w-[250px] flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white">{category}</h3>
            <ul className="mt-2 text-lg text-white space-y-2">
              {items.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-2">
                  <Icon className="text-white text-2xl" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
