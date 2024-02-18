import type { MetaFunction } from "@remix-run/node";
import {
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Separator } from "~/components/ui/separator";
import profile from "~/images/profile.jpg";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Suraj T C | Portfolio | Machine Learning",
    },
    {
      name: "description",
      content:
        "Welcome! I'm Suraj, a recent machine learning graduate with a background in software development. Join me as I solve problems and explore what excites me.",
    },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col gap-2 items-center md:flex-row-reverse md:items-start py-16">
      <div className="md:w-full flex gap-6 md:flex-col self-center">
        <img
          src={profile}
          alt="profile"
          className="aspect-square md:min-w-56 max-w-72 object-cover object-center rounded overflow-hidden"
        />
        <div className="hidden sm:block">
          <p className="font-semibold text-3xl py-2">Suraj T C</p>
          <p className="font-medium flex gap-2 items-center py-1">
            <Briefcase className="inline h-[1.2rem] w-[1.2rem]" />
            <span>Graduate Student, ML Engineer</span>
          </p>
          <p className="font-medium flex gap-2 items-center py-1">
            <GraduationCap className="inline h-[1.2rem] w-[1.2rem]" />
            <span>University of Maryland</span>
          </p>
          <Separator className="my-2" />
          <p className="text-muted-foreground font-medium flex gap-2 items-center py-1">
            <MapPin className="inline h-[1.2rem] w-[1.2rem]" />
            <span>College Park</span>
          </p>
          <p className="text-muted-foreground font-medium flex gap-2 items-center py-1">
            <Mail className="inline h-[1.2rem] w-[1.2rem]" />
            <span>mail.surajtc@gmail.com</span>
          </p>
          <p className="text-muted-foreground font-medium flex gap-2 items-center py-1">
            <Github className="inline h-[1.2rem] w-[1.2rem]" />
            <span>github.com/surajtc</span>
          </p>
          <p className="text-muted-foreground font-medium flex gap-2 items-center py-1">
            <Linkedin className="inline h-[1.2rem] w-[1.2rem]" />
            <span>linkedin.com/surajtc</span>
          </p>
        </div>
      </div>
      <div>
        <p>
          Hello, I'm Suraj an aspiring Machine Learning Engineer. I'm a
          recreational programmer and in this website I document anything and
          everything about technologies that excites me. Join me for exploring
          different technolioges together.
        </p>
      </div>
    </section>
  );
}
