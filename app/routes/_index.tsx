import type { MetaFunction } from "@remix-run/node";
import profile from "~/images/profile.jpeg";

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
    <section className="flex flex-col gap-2 items-center md:flex-row-reverse md:items-start">
      <div className="h-96 w-96 aspect-square bg-black rounded-full overflow-hidden">
        <img
          src={profile}
          alt="profile"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="">
        Hello, I'm Suraj an aspiring Machine Learning Engineer. I'm a
        recreational programmer and in this website I document anything and
        everything about technologies that excites me. Join me for exploring
        different technolioges together.
      </p>
    </section>
  );
}
