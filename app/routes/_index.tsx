import { Link, useLoaderData } from "@remix-run/react";
import {
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import BlogList from "~/components/blog-list";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

import profile from "~/content/images/profile.jpg";
import { getBlogs } from "~/utils/blog.server";

export const loader = async () => {
  return await getBlogs(3);
};

export default function Index() {
  const featuredBlogs = useLoaderData<typeof loader>();

  const bioData = [
    { title: "Suraj T C", icon: User },
    { title: "Masters Student, ML Engineer", icon: Briefcase },
    { title: "University of Maryland", icon: GraduationCap },
    { title: "College Park, MD", icon: MapPin },
  ];

  const socialLinks = [
    { link: "mailto:mail.surajtc@gmail.com", icon: Mail },
    { link: "https://www.linkedin.com/in/surajtc/", icon: Linkedin },
    { link: "https://github.com/surajtc", icon: Github },
  ];
  return (
    <div className="flex flex-col md:flex-row-reverse gap-x-12 pt-8 px-2 md:px-0">
      <section className="flex gap-2 md:flex-col w-full md:w-min">
        <div className="min-w-12 max-w-64">
          <img
            src={profile}
            alt="profile"
            className="object-cover object-center rounded overflow-hidden"
          />
        </div>
        <div className="flex flex-col justify-between text-xs md:text-base whitespace-nowrap gap-1 md:gap-4">
          {bioData.map((item, idx) => (
            <div key={idx} className="flex">
              <span className="px-2 ">
                {
                  <item.icon className="inline h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] text-muted-foreground" />
                }
              </span>
              <p className={idx == 0 ? "font-semibold" : ""}>{item.title}</p>
            </div>
          ))}
          <div>
            <Separator className="mb-2" />

            <div className="flex gap-2">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.icon className="inline h-[1.2rem] w-[1.2rem]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex-1">
        <section className="md:row-start-1">
          <h3 className="pt-4">{"Hello!"}</h3>
          <h1 className="font-semibold text-4xl pt-2 pb-2">{"I'm Suraj,"}</h1>
          <h2 className=" text-xl pb-2 text-muted-foreground">
            {"an aspiring Machine Learning Engineer."}
          </h2>
          <p className="py-2 ">
            {
              "I enjoy making and breaking things with code during my free time."
            }
            <br />
            {
              "In this corner, I share what I'm working on, what I've learned, and even epic failures along the way."
            }
          </p>
          <p className=" pt-8">
            {"Click the button below to learn more about me or say hello."}
          </p>
          <div className="pt-4 pb-16 flex gap-4">
            <Link to="/about" className={buttonVariants()}>
              About Me
            </Link>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "secondary" })}
            >
              Contact
            </Link>
          </div>
        </section>

        {featuredBlogs.length && (
          <section className="">
            <h3 className="text-2xl font-bold pt-4">Recent Blogs</h3>
            <BlogList blogs={featuredBlogs} />
            <Link
              to="/blog"
              className="font-bold text-sm text-center w-full block"
            >
              See all
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
