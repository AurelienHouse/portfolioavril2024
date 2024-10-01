// import { url } from "inspector";
import { Book, Code, LucideIcon, Utensils } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SIDE_PROJECT = [
  {
    Logo: Book,
    title: "ePagine",
    description: "Une landing page pour un site de librairie",
    url: "https://demo-landing-page-book-shop.vercel.app/",
  },
  {
    Logo: Utensils,
    title: "Veggie House",
    description: "Site de restaurant végétarien avec des animations dynamique",
    url: "https://veggie-house.vercel.app/",
  },
  {
    Logo: Utensils,
    title: "Veggie House Mobile",
    description:
      "Version Mobile de Veggie House avec selection de produit et panier",
    url: "https://veggie-house-mobile.vercel.app/",
  },
];

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 hover:pl-2 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
