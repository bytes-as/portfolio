import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Data Science Fellowship",
    organization: "Fellowship.AI, San Francisco CA",
    period: "09/2020 - 12/2020",
    description: "Worked on object localization in occluded environments using DETR model and developed automated synthetic data generation framework.",
  },
  {
    title: "User Authentication using Key-Board Signature",
    organization: "Mobile Research Lab, IIT Kharagpur",
    period: "05/2019 - 07/2019",
    description: "Developed ML algorithms for keyboard biometric authentication and anomaly detection using Cortical Learning and Robust Random Cut Forest algorithms.",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 px-4 relative" id="projects">
      <div className="hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect card-hover">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                  <p className="text-sm text-primary/80 mt-2">
                    {project.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed hover:text-primary/90 transition-colors">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};