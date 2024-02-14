import type { MetaFunction } from "@remix-run/node";

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
    <>
      <div>This is INDEX</div>
    </>
  );
}
