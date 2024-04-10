/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { ReactIcon } from "./ui/ReactIcon";
import { Code } from "./ui/Code";



    

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
        <div className="flex-[3] w-full flex flex-col gap-2" >
            <h2 className="font-caption font-bold text-muted-foreground  text-5xl">Aurélien MAISON</h2>
            <h3 className="text-3xl font-caption">Developpeur Front-End </h3>
            <p className="text-base text-muted-foreground">               
                Je suis un codeur <Code className="inline-flex items-center m-2 gap-1">
                    <ReactIcon size={16} className="inline" />React</Code>
                et utilise Tailwind, NextJs et TypeScript

                
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto ">
            <img src="https://media.licdn.com/dms/image/C5603AQGp-ljV1rd42A/profile-displayphoto-shrink_800_800/0/1567900735362?e=1718236800&v=beta&t=54aeK-WXLu2q0wj3WPaQzWFdmwHvpxwDSi_qkw8MPW4" alt="ma photo de profil" className="rounded-full w-full h-auto max-w-xs max-md:w-56 m-4 " />
            


        </div>

    </Section>
};
