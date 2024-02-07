import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "surajtc.dev" },
    { name: "description", content: "homepage" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
