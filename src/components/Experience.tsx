import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Software Development Engineer",
    company: "Anakin (YC S21)",
    period: "06/2023 - Present",
    location: "Bangalore, India",
    highlights: [
      "Single-handedly developed account management system for 30+ scraping services",
      "Engineered automated product matcher using NLP and GPT API",
      "Built 20+ scalable, stateless scraping services",
      "Streamlined client data delivery through stateless compiler",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Amazon Development Centre Pvt. Ltd.",
    period: "11/2021 - 03/2023",
    location: "India",
    highlights: [
      "Automated accounting workflows for EU transportation",
      "Streamlined accounting workflows into modular units",
      "Automated CI/CD load testing with mock APIs",
      "Resolved production bottlenecks",
    ],
  },
  {
    title: "Associate Software Development Engineering",
    company: "Sigmoid Analytics",
    period: "10/2020 - 11/2021",
    location: "Bangalore, India",
    highlights: [
      "Developed self-sustaining ERP system",
      "Implemented workflows to automate routine tasks",
      "Led 2 projects within a team of 5",
      "Designed real-time clickstream analysis",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-32 px-4 relative" id="experience">
      <div className="hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect card-hover transform transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-semibold gradient-text">{exp.title}</h3>
                      <p className="text-primary/80">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground marker:text-primary/50">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-relaxed hover:text-primary/90 transition-colors">{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};