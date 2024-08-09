import { Link } from "@remix-run/react";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import PROJECTS from "~/content/projects.json";

export type Project = {
  title: string;
  description: string;
  link: string;
  stack: string[];
};

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="block w-full py-2">
      <div className="flex justify-between items-top">
        <div>
          <h3 className="font-semibold pt-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">
            {project.stack.join(", ")}
          </p>
        </div>
        <Link
          to={project.link}
          target="_blank"
          rel="noreferrer"
          className={`${buttonVariants({
            size: "sm",
            variant: "ghost",
          })} text-primary/90`}
        >
          GitHub
          <ArrowUpRight className="inline h-[1rem] w-[1rem] ml-1" />
        </Link>
      </div>
      <p className="min-w-full mb-3 mt-4 text-primary/90">
        {project.description}
      </p>

      <Separator />
    </div>
  );
}

export default function PorjectList() {
  return (
    <>
      {PROJECTS &&
        PROJECTS.map((project) => (
          <ProjectItem project={project} key={project.link} />
        ))}
    </>
  );
}
