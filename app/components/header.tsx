import { ModeToggle } from "./mode-toggle";
import { NavLink } from "@remix-run/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { GithubIcon, LinkedinIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Logo from "./logo";

function NavLinks({ onAction }: { onAction: () => void }) {
  const links = [
    // { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  const handleClick = () => {
    onAction();
  };

  return (
    <nav className="flex flex-col md:flex-row gap-4 text-md">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "bg-red-700" : ""
          }
          key={index}
          onClick={handleClick}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b sticky top-0 z-10 bg-inherit">
      <section className="max-w-4xl mx-auto flex justify-between items-center px-1 py-2">
        <div className="flex justify-between items-center gap-8">
          <NavLink to="/">
            <Logo className="h-6 w-6 fill-foreground" />
          </NavLink>
          <div className="hidden md:block">
            <NavLinks onAction={handleClose} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button variant="ghost" size="icon" className="ml-4">
            <GithubIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="ghost" size="icon" className="mr-4">
            <LinkedinIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="block md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="block md:hidden">
              <SheetHeader>
                <SheetTitle className="flex justify-between items-center mb-4">
                  <NavLink to="/" onClick={handleClose}>
                    <Logo className="h-6 w-6 fill-foreground" />
                  </NavLink>
                  <SheetClose>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>

              <NavLinks onAction={handleClose} />
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </header>
  );
}
