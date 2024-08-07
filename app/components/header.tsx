import { ModeToggle } from "./mode-toggle";
import { Link, NavLink } from "@remix-run/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import Logo from "./logo";

function NavLinks({ onAction }: { onAction: () => void }) {
  const links = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "Projects", path: "/projects" },
  ];

  const handleClick = () => {
    onAction();
  };

  return (
    <nav className="flex flex-col md:flex-row gap-3 text-muted-foreground">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          className={({ isActive, isPending }) =>
            isActive ? "text-foreground font-medium" : isPending ? "" : ""
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 120) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const socialLinks = [
    { link: "mailto:mail.surajtc@gmail.com", icon: Mail },
    { link: "https://www.linkedin.com/in/surajtc/", icon: Linkedin },
    { link: "https://github.com/surajtc", icon: Github },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={cn(
        "transition-all sticky top-0 z-10 bg-background/50 backdrop-blur-md border-b"
      )}
    >
      <section className="transition-all max-w-3xl mx-auto flex justify-between items-center px-1 py-2">
        {/* <div className="flex justify-between items-center gap-6">
          <NavLink to="/"> */}
        {/* <Logo className="h-[1.5rem] w-[1.5rem] fill-foreground inline-block pb-[0.15rem] pl-2 md:pl-0" /> */}
        {/* <p className="inline-block font-bold">surajtc.dev</p> */}
        {/* </NavLink> */}
        <div className="hidden md:block">
          <NavLinks onAction={handleClose} />
        </div>
        {/* </div> */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="block md:hidden">
            <div className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="block md:hidden">
            <SheetHeader>
              <SheetTitle className="flex justify-between items-center mb-4">
                <NavLink to="/" onClick={handleClose}>
                  <Logo className="h-[1.5rem] w-[1.5rem] fill-foreground inline-block pb-[0.15rem]" />
                  {/* <p className="inline-block font-bold">surajtc.dev</p> */}
                </NavLink>
                <SheetClose>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col h-full justify-between pb-8 pt-4">
              <div className="text-xl md:text-md">
                <NavLinks onAction={handleClose} />
              </div>
              <div>
                {socialLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <item.icon className="inline h-[1.2rem] w-[1.2rem]" />
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex justify-center items-center">
          <div className="hidden md:block">
            {/* {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon className="inline h-[1.2rem] w-[1.2rem]" />
              </Link>
            ))} */}
          </div>
          <ModeToggle />
          <Link
            to="/contact"
            className={`${buttonVariants({ variant: "secondary" })} ml-2`}
          >
            <span className="px-1">Contact</span>
          </Link>
        </div>
      </section>
    </header>
  );
}
