import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "surajtc.dev" },
    { name: "description", content: "homepage" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="border-b p-2">
        <nav className="max-w-3xl mx-auto flex justify-between items-center">
          <p className="text-xl font-semibold">surajtc.dev</p>
          <ModeToggle />
        </nav>
      </section>
      <section className="flex flex-col items-center justify-center grow">
        <div>
          <h1 className="text-4xl">Stay tuned...</h1>
          <p className="text-lg font-light pt-2">
            Big things are happening behind the scenes!
          </p>
        </div>
      </section>
      <section className="min-h-64"></section>
    </main>
  );
}
