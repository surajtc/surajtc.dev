import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-inherit">
      <nav className="max-w-4xl mx-auto flex justify-between items-center px-1 py-2">
        <p className="text-xl font-bold">Suraj TC</p>
        <ModeToggle />
      </nav>
    </header>
  );
}
