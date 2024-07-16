/* eslint-disable react/no-unescaped-entities */
import { Section } from "./Section";
import { Code } from "./ui/Code";
import { OpenAiIcon } from "./ui/OpenAi";
import { ReactIcon } from "./ui/ReactIcon";
import { TailWindIcon } from "./ui/TailwindIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je travaille avec...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4">
          <ReactIcon
            size={42}
            className="animate-spin "
            style={{ animationDuration: "10s" }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight">ReactJs</h3>
          <p className="text-sm text-muted-foreground leading-loose">
            Mon principal framework est <Code>ReactJs</Code> et j'utilise{" "}
            <Code>NextJs</Code> pour le back-end. Et bien sûr je n'hésite pas à
            me servir de <Code>ChatGPT</Code> comme assistant.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <TailWindIcon size={42} className="animate-bounce" />
          <h3 className=" text-2xl font-semibold tracking-tight">
            TailWindCss
          </h3>
          <p className="text-sm text-muted-foreground leading-loose">
            J'apprécie expérimenter avec le CSS vanilla, mais j'utilise
            régulièrement <Code>Tailwind CSS</Code> pour mes projets
            professionnels.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <OpenAiIcon
            size={42}
            className="animate-spin "
            style={{ animationDuration: "10s" }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight">OpenAi</h3>
          <p className="text-sm text-muted-foreground leading-loose">
            J'ai appris à utiliser <Code>ChatGPT</Code> ainsi que{" "}
            <Code>GitHubCopilot</Code> pour m'aider et accélérer mon code.
          </p>
        </div>
      </div>
    </Section>
  );
};
