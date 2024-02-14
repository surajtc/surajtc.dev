import { ModeToggle } from "./mode-toggle";
import { NavLink } from "@remix-run/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

function NavLinks() {
  const links = [
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/about" },
  ];
  return (
    <nav className="flex flex-col md:flex-row gap-4 text-md">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "bg-red-700" : ""
          }
          key={index}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-inherit">
      <section className="max-w-4xl mx-auto flex justify-between items-center px-1 py-2">
        <NavLink to="/" className="text-xl font-bold">
          Suraj TC
        </NavLink>
        <div className="flex justify-center items-center gap-2">
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <ModeToggle />
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <NavLinks />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </header>
  );
}
