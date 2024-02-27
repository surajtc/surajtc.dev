import {
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import profile from "~/content/images/profile.jpg";

export default function Index() {
  return (
    <section className="flex flex-col gap-2 items-center md:flex-row-reverse md:items-start py-8">
      <div className="flex gap-2 md:flex-col self-center">
        <img
          src={profile}
          alt="profile"
          className="aspect-square md:min-w-56 max-w-64 object-cover object-center rounded overflow-hidden"
        />
        <div className="text-xs md:text-base ">
          <p className="font-semibold flex items-center">
            <Button variant="ghost" size="icon">
              <User className="inline h-[1.2rem] w-[1.2rem] text-muted-foreground" />
            </Button>
            <span>Suraj T C</span>
          </p>
          <p className="flex items-center">
            <Button variant="ghost" size="icon">
              <Briefcase className="inline h-[1.2rem] w-[1.2rem] text-muted-foreground" />
            </Button>
            <span>Masters Student, ML Engineer</span>
          </p>
          <p className="flex items-center">
            <Button variant="ghost" size="icon">
              <GraduationCap className="inline h-[1.2rem] w-[1.2rem] text-muted-foreground" />
            </Button>
            <span>University of Maryland</span>
          </p>
          <p className="flex items-center">
            <Button variant="ghost" size="icon">
              <MapPin className="inline h-[1.2rem] w-[1.2rem] text-muted-foreground" />
            </Button>
            <span>College Park</span>
          </p>
          <Separator className="my-2" />

          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Mail className="inline h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="inline h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="inline h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-4 pr-2 text-center md:text-left">
        <h3 className="pt-2">Hello!</h3>
        <h1 className="font-semibold text-4xl pt-2 pb-2">I'm Suraj,</h1>
        <h2 className=" text-xl pb-2 text-muted-foreground">
          an aspiring Machine Learning Engineer.
        </h2>
        <p className="py-2 ">
          I enjoy making and breaking things with code during my free time.{" "}
          <br />
          In this corner, I share what I'm working on, what I've learned, and
          even epic failures along the way.
        </p>
        <p className=" pt-4">
          Click the button below to say hello or learn more about me.
        </p>
        <div className="py-4">
          <Button variant="secondary" className="mr-4">
            About Me
          </Button>
          <Button className="mx-auto">Contact</Button>
        </div>
      </div>
    </section>
  );
}
