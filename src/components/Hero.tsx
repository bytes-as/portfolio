import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createParticle(x, y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="space-y-6 animate-fade-in relative z-10">
        <div className="floating">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 gradient-text">
            Arun Singh
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl glass-effect p-4 rounded-lg">
          Senior Software Development Engineer specializing in scalable systems and automation
        </h2>
        <div className="flex gap-4 mb-12">
          <Button variant="outline" size="icon" className="rounded-full glow-effect" asChild>
            <a href="mailto:arunsin997@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full glow-effect" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full glow-effect" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};