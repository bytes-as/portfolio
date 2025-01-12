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
    <section className="py-20 px-4" id="experience">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-secondary">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};