import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Rust", "Java", "C", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["Node.js", "FastAPI", "Flask", "Django", "React"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "Jenkins CI", "AWS Services", "Machine Learning"],
  },
];

export const Skills = () => {
  return (
    <section className="py-32 px-4 relative" id="skills">
      <div className="hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 glass-effect rounded-full text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};