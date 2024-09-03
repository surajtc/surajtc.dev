import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import ShowMore from "./showmore";

type ListItemProps = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  button?: {
    text: string;
    link: string;
  };
};

export function ListItem({
  title,
  subtitle,
  description,
  button,
}: ListItemProps) {
  return (
    <div>
      <div className="flex justify-between items-top">
        <div>
          <h3 className="group-hover:underline font-semibold pt-2">{title}</h3>
          <p className="text-muted-foreground text-sm pt-1">{subtitle}</p>
        </div>
        {button?.link && (
          <Link
            to={button.link}
            target="_blank"
            rel="noreferrer"
            className={`${buttonVariants({
              size: "sm",
              variant: "ghost",
            })} text-primary/90`}
          >
            {button.text}
            <ArrowUpRight className="inline h-[1rem] w-[1rem] ml-1" />
          </Link>
        )}
      </div>

      {/* <p className="min-w-full pt-4 text-primary/90 line-clamp-2">
        {description}
      </p> */}

      <ShowMore text={description} />

      <Separator className="my-4" />
    </div>
  );
}

export function List({
  list,
  viewAll,
}: {
  list: ListItemProps[];
  viewAll?: string;
}) {
  return (
    <>
      {list.map((v, i) =>
        v.link ? (
          <Link
            key={i}
            to={v.link}
            className="group block w-full py-2"
            prefetch="viewport"
          >
            <ListItem
              title={v.title}
              subtitle={v.subtitle}
              description={v.description}
              button={v.button}
            />
          </Link>
        ) : (
          <ListItem
            key={i}
            title={v.title}
            subtitle={v.subtitle}
            description={v.description}
            button={v.button}
          />
        )
      )}
      {viewAll && (
        <div>
          <Link
            to={viewAll}
            className="font-bold text-sm text-center w-full block"
          >
            See all
          </Link>
        </div>
      )}
    </>
  );
}
