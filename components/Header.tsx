import Link from "next/link";
import { Section } from "./Section";
import { GitHubIcon } from "./ui/GitHubIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { LinkedInIcon } from "./ui/LinkedInIcon";
// import { Button } from "./ui/button"

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-sm bg-gradient-to-b from-slate-950">
      <Section className="flex items-baseline">
        <h1 className="text-4xl uppercase font-bold text-primary mr-2">
          PortFolio 2024
        </h1>

        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/AurelienHouse"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-16 p-0 rounded-full"
            )}
          >
            <GitHubIcon size={32} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aur%C3%A9lien-maison-30150088/"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-16 p-0 rounded-full"
            )}
          >
            <LinkedInIcon size={32} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
