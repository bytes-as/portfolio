import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Arun Singh
      </h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
        Senior Software Development Engineer
      </h2>
      <div className="flex gap-4 mb-12">
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:arunsin997@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};