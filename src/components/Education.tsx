import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section className="py-32 px-4 bg-secondary/20 backdrop-blur-sm relative" id="education">
      <div className="hero-gradient" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Education
        </h2>
        <Card className="bg-card/50 backdrop-blur-sm border-white/10 card-hover">
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold text-white/90">
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
            <p className="text-sm text-muted-foreground leading-relaxed">
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