import { Link, useLoaderData } from "@remix-run/react";
import {
  Briefcase,
  Building,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Search,
  TestTube2,
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
    // { title: "Suraj T C", icon: User },
    { title: "Intern at CATT Lab", icon: Briefcase },
    { title: "CATT Lab", icon: Briefcase },
    { title: "University of Maryland", icon: GraduationCap },
    { title: "College Park, MD", icon: MapPin },
  ];

  const socialLinks = [
    { link: "mailto:mail.surajtc@gmail.com", icon: Mail },
    { link: "https://www.linkedin.com/in/surajtc/", icon: Linkedin },
    { link: "https://github.com/surajtc", icon: Github },
  ];

  return (
    <>
      <div className="grid gap-3 md:grid-cols-5 py-6">
        <section className="border rounded-md p-4 md:col-span-5 flex flex-col md:flex-row items-center gap-4">
          <div className="h-40 w-40 aspect-square">
            <img
              src={profile}
              alt="profile"
              className="h-full aspect-square object-cover object-center rounded-full overflow-hidden"
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl ml-2">{"Suraj T C"}</h1>
            <p className="text-muted-foreground ml-2 my-3">
              {
                "Machine learning graduate with 2 years of industry experience as Software Engineer who enjoys solving real-world problems"
              }
            </p>
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })} mr-2`}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon className="inline h-[1.2rem] w-[1.2rem]" />
              </Link>
            ))}
          </div>
        </section>
        <section className="border rounded-md p-4 md:col-span-3">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-3">
            <p className="font-semibold">Master's in Machine Learning</p>
            <p className="text-muted-foreground">University of Marylad, 2024</p>
            <p className="text-muted-foreground">College Park, USA</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold">Bachelors's in Computer Science</p>
            <p className="text-muted-foreground">
              Visveswaraya Technological Univerisy, 2021
            </p>
            <p className="text-muted-foreground">Mysore, India</p>
          </div>
        </section>
        <section className="border rounded-md p-4 md:col-span-2">
          <div className="flex items-center">
            <Search className="inline h-[1.2rem] w-[1.2rem] mr-3 text-muted-foreground" />
            <p className="inline">Seeking Full-time Roles</p>
          </div>
          <div className="flex items-center mt-3">
            <TestTube2 className="inline h-[1.2rem] w-[1.2rem] mr-3 text-muted-foreground" />
            <p className="inline">Machine Learning</p>
          </div>
          <div className="flex items-center mt-3">
            <Briefcase className="inline h-[1.2rem] w-[1.2rem] mr-3 text-muted-foreground" />
            <p className="inline">Software Engineer Intern</p>
          </div>
          <div className="flex items-center mt-3">
            <Building className="inline h-[1.2rem] w-[1.2rem] mr-3 text-muted-foreground" />
            <p className="inline">CATT Lab</p>
          </div>
          <div className="flex items-center mt-3">
            <MapPin className="inline h-[1.2rem] w-[1.2rem] mr-3 text-muted-foreground" />
            <p className="inline">College Park, MD</p>
          </div>
        </section>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold">About Me</h3>
        <p className="mt-3">
          Hi, I'm Suraj, aspiring Software Engineer. I enjoy making and breaking
          things with code. In this space, I share what I'm working on, what
          I've learned, and even epic failures along the way.
        </p>
      </div>

      {featuredBlogs.length && (
        <div className="mt-6 p-4">
          <h3 className="text-2xl font-bold">Recent Blog</h3>
          <div>
            <BlogList blogs={featuredBlogs} />
            <Link
              to="/blog"
              className="font-bold text-sm text-center w-full block"
            >
              See all
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
