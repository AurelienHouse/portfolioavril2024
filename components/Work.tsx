import { Camera, LucideIcon, Popcorn, Tent } from "lucide-react";
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    Logo: Popcorn,
    title: "Pathé",
    role: "agent d'accueil",
    date: "2002 - 2022",
    url: "https://www.pathe.fr/cinemas/cinema-pathe-quai-d-ivry",
  },
  {
    Logo: Camera,
    title: "Photographe",
    role: "Mariage, Mode",
    date: "2007 - aujourd'hui",
    url: "https://aurelienmaison.book.fr/galeries/",
  },
  {
    Logo: Tent,
    title: "Epitech",
    role: "Boot-Camp",
    date: "2023",
    url: "https://www.epitech.eu/ecole-informatique-paris/",
  },
];
export type WorkProps = {
  Logo: LucideIcon;
  title: string;
  role: string;
  date: string;
  url: string;
};

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto ">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
