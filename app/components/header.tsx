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
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Logo from "./logo";

function NavLinks({ onAction }: { onAction: () => void }) {
  const links = [
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/about" },
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
        <NavLink to="/">
          <Logo className="h-6 w-6 fill-foreground" />
        </NavLink>
        <div className="flex justify-center items-center gap-2">
          <div className="hidden md:block">
            <NavLinks onAction={handleClose} />
          </div>
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
