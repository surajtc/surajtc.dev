import { Link, useLoaderData } from "@remix-run/react";
import {
  Briefcase,
  Building,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Search,
} from "lucide-react";
import BlogList from "~/components/blog-list";
import PorjectList from "~/components/project-list";
import { buttonVariants } from "~/components/ui/button";

import profile from "~/content/images/profile.jpg";
import { getBlogs } from "~/utils/blog.server";
import { ContactForm } from "./resources.contact";
import config from "~/content/config.json";
import { Section } from "~/components/section";

export const loader = async () => {
  return await getBlogs(3);
};

export default function Index() {
  const featuredBlogs = useLoaderData<typeof loader>();

  const socialLinks = [
    { link: "mailto:mail.surajtc@gmail.com", icon: Mail },
    { link: "https://www.linkedin.com/in/surajtc/", icon: Linkedin },
    { link: "https://github.com/surajtc", icon: Github },
  ];

  return (
    <>
      <div className="grid gap-3 md:grid-cols-5 py-6">
        <Section
          variant="border"
          className="md:col-span-5 flex flex-col md:flex-row items-center gap-4"
        >
          <div className="h-40 w-40 aspect-square">
            <img
              src={profile}
              alt="profile"
              className="h-full aspect-square object-cover object-center rounded-full overflow-hidden"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-3xl ml-2 tracking-tight">
              {config.name}
            </h1>
            <p className="text-primary/90 ml-2 my-2">{config.description}</p>

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
        </Section>

        <Section title="Education" variant="border" className="md:col-span-3">
          {config.education.map((v, i) => (
            <div className={i != 0 ? "mt-4" : ""} key={i}>
              <p className="font-semibold">{v.degree}</p>
              <p className="text-primary/90 text-sm mt-1">{`${v.university}, ${v.year}`}</p>
              <p className="text-primary/90 text-sm">{v.location}</p>
            </div>
          ))}
        </Section>

        <Section variant="border" className="md:col-span-2">
          <div className="inline-flex items-center">
            <Search className="inline h-[1.1rem] w-[1.1rem] ml-3 md:ml-0 mr-3 text-muted-foreground" />
            <p className="inline">Seeking Full-time Roles</p>
          </div>
          <div className="inline-flex items-center mt-4">
            <FlaskConical className="inline h-[1.1rem] w-[1.1rem] ml-3 md:ml-0 mr-3 text-muted-foreground" />
            <p className="inline">Machine Learning</p>
          </div>
          <div className="inline-flex items-center mt-4">
            <Briefcase className="inline h-[1.1rem] w-[1.1rem] ml-3 md:ml-0 mr-3 text-muted-foreground" />
            <p className="inline">Software Engineer Intern</p>
          </div>
          <div className="inline-flex items-center mt-4">
            <Building className="inline h-[1.1rem] w-[1.1rem] ml-3 md:ml-0 mr-3 text-muted-foreground" />
            <p className="inline">CATT Lab</p>
          </div>
          <div className="inline-flex items-center mt-4">
            <MapPin className="inline h-[1.1rem] w-[1.1rem] ml-3 md:ml-0 mr-3 text-muted-foreground" />
            <p className="inline">College Park, MD</p>
          </div>
        </Section>
      </div>

      <Section title="About">{config.about}</Section>

      {featuredBlogs.length && (
        <Section title="Blogs">
          <BlogList blogs={featuredBlogs} />
          <Link
            to="/blog"
            className="font-bold text-sm text-center w-full block my-2"
          >
            See all
          </Link>
        </Section>
      )}

      <Section title="Projects">
        <PorjectList />
        <Link
          to="/projects"
          className="font-bold text-sm text-center w-full block my-2"
        >
          See all
        </Link>
      </Section>

      <Section title="Contact">
        <p className="text-primary/90">
          If you have any questions, inquiries, or just want to say hello, feel
          free to reach out at <strong> mail.surajtc[at]gmail.com</strong>. I'll
          get back to you as soon as possible!
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
