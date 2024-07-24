/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { ReactIcon } from "./ui/ReactIcon";
import { Code } from "./ui/Code";
import CvProfilPicture from "./ui/CvProfilPicture";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-muted-foreground  text-5xl">
          Aurélien MAISON
        </h2>
        <h3 className="text-3xl font-caption">Développeur Front-End </h3>
        <p className="text-base text-muted-foreground">
          Spécialiste en{" "}
          <Code className="inline-flex items-center m-2 gap-1">
            <ReactIcon size={16} className="inline" />
            React
          </Code>
          et utilise Tailwind, NextJs et TypeScript
        </p>
        {/* <p className="mt-3 mr-7 text-base text-muted-foreground">
            "Je suis un développeur Front-end passionné, spécialisé en ReactJS, avec une solide base acquise lors d'un bootcamp chez Epitech en 2023. Mon parcours a débuté pendant le confinement où j'ai découvert ma passion pour le code. Depuis, j'ai consacré de nombreuses heures à perfectionner mes compétences en autodidacte, en réalisant divers projets personnels. Mon engagement et ma volonté d'apprentissage continu me permettent d'appréhender avec confiance les défis techniques et d'apporter des solutions innovantes. Je suis enthousiaste à l'idée de contribuer à des projets passionnants et de progresser au sein d'une équipe dynamique."
            </p> */}
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto ">
        <div className="w-1/2 rounded-full overflow-hidden">
          <CvProfilPicture className="object-contain w-full h-full" />
        </div>
      </div>
    </Section>
  );
};
