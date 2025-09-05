import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS / Tailwind", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "80%" },
    { name: "Node.js", level: "70%" },
    { name: "MongoDB", level: "65%" },
  ];

  return (
    <section className="bg-[#0A192F] text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#38BDF8] mb-6 text-center md:text-left">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.level}</span>
              </div>
              <div className="w-full bg-[#112240] rounded-full h-3">
                <div
                  className="bg-[#38BDF8] h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
