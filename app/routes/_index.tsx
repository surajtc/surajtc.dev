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
    { title: "Software Engineer", icon: Briefcase },
    { title: "University of Maryland", icon: GraduationCap },
    { title: "College Park, MD", icon: MapPin },
  ];

  const socialLinks = [
    { link: "mailto:mail.surajtc@gmail.com", icon: Mail },
    { link: "https://www.linkedin.com/in/surajtc/", icon: Linkedin },
    { link: "https://github.com/surajtc", icon: Github },
  ];

  return (
    <div className="pt-8 px-2 md:px-0">
      <section className="flex gap-2">
        <div className="aspect-square max-h-40">
          <img
            src={profile}
            alt="profile"
            className="object-cover object-center rounded-full overflow-hidden"
          />
        </div>
        <div className="pl-4 pt-3">
          <h1 className="font-semibold text-3xl">{"Suraj T C"}</h1>
          <h1 className="text-lg pt-2">
            {
              "Software Engineer with 2 years of industry experience specialinzing in Machine Learnign"
            }
          </h1>
          <div className="flex flex-col justify-between text-xs md:text-base whitespace-nowrap gap-1">
            {/* {bioData.map((item, idx) => (
            <div key={idx} className="flex">
              <span className="px-4">
                {
                  <item.icon className="inline h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] text-muted-foreground" />
                }
              </span>
              <p className={idx == 0 ? "font-semibold" : ""}>{item.title}</p>
            </div>
          ))} */}
            <div>
              {/* <Separator className="mb-3" /> */}

              <div className="flex gap-3">
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
                {/* <Link to="/contact" className={buttonVariants()}>
                  <span className="md:w-20 text-center">Contact</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col justify-between text-xs md:text-base whitespace-nowrap gap-1 p-3 pt-8">
          {bioData.map((item, idx) => (
            <div key={idx} className="flex">
              <span className="px-4">
                {
                  <item.icon className="inline h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] text-muted-foreground" />
                }
              </span>
              <p className={idx == 0 ? "font-semibold" : ""}>{item.title}</p>
            </div>
          ))}
          <div>
            <Separator className="mb-3" />

            <div className="flex gap-3">
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
              <Link to="/contact" className={buttonVariants()}>
                <span className="md:w-20 text-center">Contact</span>
              </Link>
            </div>
          </div>
        </div> */}
      </section>
      <Separator className="my-4" />

      <section className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold pt-4">Education</h3>
          <p className="font-semibold ">Master's in Machine Learning</p>
          <p className="text-muted-foreground">University of Marylad, 2024</p>
          <p className="text-muted-foreground">College Park, USA</p>
          <p className="font-semibold pt-2">Bachelors's in Computer Science</p>
          <p className="text-muted-foreground">
            Visveswaraya Technological Univerisy, 2021
          </p>
          <p className="text-muted-foreground">Mysore, India</p>
        </div>
        <div className="bg-secondary p-2 rounded-md">
          {bioData.map((item, idx) => (
            <div key={idx} className="flex py-2">
              <span className="px-4">
                {
                  <item.icon className="inline h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] text-muted-foreground" />
                }
              </span>
              <p className={idx == 0 ? "font-semibold" : ""}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex-1">
        {/* <section className="md:row-start-1">
          <h3 className="pt-4">{"Hello!"}</h3>
          <h1 className="font-semibold text-4xl pt-4 pb-2">{"I'm Suraj,"}</h1>
          <h2 className=" text-xl pb-2 text-muted-foreground">
            {"aspiring Software Engineer."}
          </h2>
          <p className="py-4">
            {"I enjoy making and breaking things with code."}
            <br />
            {
              "In this space, I share what I'm working on, what I've learned, and even epic failures along the way."
            }
          </p>
          <p className="pt-2">
            {"Click below to learn more about me or say hello."}
          </p>
          <div className="pt-4 pb-16 flex gap-4">
            <Link to="/about" className={buttonVariants()}>
              <span className="md:w-20 text-center">About Me</span>
            </Link>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "secondary" })}
            >
              <span className="md:w-20 text-center">Contact</span>
            </Link>
          </div>
        </section> */}
        <div>
          <h3 className="text-2xl font-bold pt-4">About</h3>
          <p>
            Hi, I'm Suraj, aspiring Software Engineer. I enjoy making and
            breaking things with code. In this space, I share what I'm working
            on, what I've learned, and even epic failures along the way.
          </p>
        </div>

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
