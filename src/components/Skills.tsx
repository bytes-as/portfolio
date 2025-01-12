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
    <section className="py-20 px-4 bg-secondary/50" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-secondary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};