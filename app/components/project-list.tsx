import { Link } from "@remix-run/react";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import {
  ArrowUpRight,
  ChevronsRight,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  link: string;
  stack: string[];
};

const PROJECTS = [
  {
    title: "Efficient Document Retrieval with RAG for GPT-3.5",
    description:
      "This project explores using Retrieval-Augmented Generation (RAG) to enhance document retrieval capabilities for GPT-3.5. RAG leverages a dual approach, combining information retrieval techniques with the powerful language generation of GPT-3.5.",
    link: "https://github.com/surajtc/ollama-rag",
    stack: ["Ollama", "PrivateGPT", "Chroma DB"],
  },
  {
    title: "LFW Face Recognition",
    description:
      "Evaluation of SVM and kNN classifiers using different data representation methods on Labeled Faces in the Wild (LFW) dataset.",
    link: "https://github.com/surajtc/lfw-face-recognition",
    stack: ["Matplotlib", "Numpy"],
  },
  {
    title: "PhotoHive - A Photo Gallery App",
    description:
      "PhotoHive is a gallery app that allows users to upload, search, and manage photos using a serverless backend.",
    link: "https://github.com/surajtc/PhotoHive",
    stack: ["Aws Lambda", "React.js", "Flask"],
  },
];

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="block">
      <div className="flex justify-between items-top mt-6">
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
