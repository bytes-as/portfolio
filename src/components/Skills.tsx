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
    <section className="py-32 px-4 bg-secondary/20 backdrop-blur-sm relative" id="skills">
      <div className="hero-gradient" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10 card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white/90">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors"
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