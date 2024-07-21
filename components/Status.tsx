import { Section } from "./Section";
import { Card } from "./ui/card";
import { SIDE_PROJECT, SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./Work";
import Link from "next/link";
import { WhatsAppCard } from "./WhatsAppCard";
import CvProfilPicture from "./ui/CvProfilPicture";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg uppercase text-muted-foreground">projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] flex flex-col w-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg uppercase text-muted-foreground">métiers</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>

        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg uppercase text-muted-foreground">
            contactez moi
          </p>
          <Link href="https://www.linkedin.com/in/aur%C3%A9lien-maison-30150088/">
            <ContactCard
              title="aurélien-maison"
              image="/cv-picture-0724.png"
              mediumImage="data:image/png;base64,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"
              description="Profil LinkedIn"
            />
          </Link>
          <WhatsAppCard
            title="WhatsApp"
            image="/cv-picture-0724.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            description="06 17 62 33 05"
          />
          <Link href="mailto:aurelien.maison@gmail.com">
            <ContactCard
              title="Gmail"
              image="/cv-picture-0724.png"
              mediumImage="https://cdn.iconscout.com/icon/free/png-256/free-google-mail-4062821-3357707.png?f=webp"
              description="aurelien.maison@gmail.com"
            />
          </Link>
        </Card>
      </div>
    </Section>
  );
};
