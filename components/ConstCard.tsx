/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative w-10 h-10">
        <img
          src={props.image}
          alt={props.title}
          className=" w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.title}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};
