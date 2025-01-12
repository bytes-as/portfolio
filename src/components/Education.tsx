import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50" id="education">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-semibold">
                Indian Institute of Technology Kharagpur
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Bachelor of Technology (Hons.), Computer Science & Engineering
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              July 2016 - May 2020
            </p>
            <p className="text-sm text-muted-foreground">
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