import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section className="py-32 px-4 relative" id="education">
      <div className="hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Education
        </h2>
        <Card className="glass-effect card-hover">
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold gradient-text">
                Indian Institute of Technology Kharagpur
              </h3>
              <p className="text-primary/80 mt-2">
                Bachelor of Technology (Hons.), Computer Science & Engineering
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              July 2016 - May 2020
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed hover:text-primary/90 transition-colors">
              Relevant Courses: Reinforcement Learning, Artificial Intelligence,
              Image Processing, Natural Language Processing, Machine Learning,
              Operating Systems, Computer Networks, DBMS, Software Engineering,
              Computer Architecture
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};