import { List } from "~/components/list";
import projects from "~/content/projects.json";

export default function About() {
  return (
    <div className="p-4">
      <List
        list={projects.map((v) => ({
          title: v.title,
          subtitle: v.stack.join(", "),
          description: v.description,
          button: {
            text: "GitHub",
            link: v.link,
          },
        }))}
      />
    </div>
  );
}
