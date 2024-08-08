import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { getToast } from "remix-toast";
import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { themeSessionResolver } from "./sessions.server";
import stylesheet from "~/tailwind.css";
import sonnerStyles from "~/sonner.css";
import { Header } from "~/components/header";
import { useEffect } from "react";
import { Toaster, toast as notify } from "sonner";
import * as gtag from "~/utils/gtags.client";
import { ArrowUpRight } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Toaster>;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: sonnerStyles },
  { rel: "preconnect", href: "https://rsms.me/" },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Suraj T C - Software Engineer - Machine Learning",
    },
    {
      name: "description",
      content:
        "Welcome! I'm Suraj, a recent machine learning graduate with a background in software development. Join me as I solve problems and explore what excites me.",
    },
  ];
};

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const { toast, headers } = await getToast(request);

  return json(
    {
      gaTrackingId: process.env.GA_TRACKING_ID,
      theme: getTheme(),
      toast,
    },
    { headers }
  );
}

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const { theme, toast } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (toast) {
      if (toast?.type === "error") {
        notify.error(toast.message);
      }
      if (toast?.type === "success") {
        notify.success(toast.message);
      }
    }
  }, [toast]);

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  useEffect(() => {
    if (data.gaTrackingId?.length) {
      gtag.pageview(location.pathname, data.gaTrackingId);
    }
  }, [location, data.gaTrackingId]);

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        {process.env.NODE_ENV === "development" || !data.gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${data.gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${data.gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        <Header />
        <main className="flex flex-col flex-1 overflow-y-scroll">
          <section className="flex-1 max-w-3xl w-full mx-auto px-1 pt-3">
            <Outlet />
          </section>
          <div className="border-t mt-4">
            <footer className="max-w-3xl w-full mx-auto p-1 py-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  <Link
                    to={"https://github.com/surajtc/surajtc.dev"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center hover:underline"
                  >
                    Open-sourced on github
                    <ArrowUpRight className="inline h-[0.9rem] w-[0.9rem]" />
                  </Link>
                </span>
                <span>surajtc.dev &copy; {year}</span>
              </div>
            </footer>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster
          theme={theme as ToasterProps["theme"]}
          className="toaster group"
          toastOptions={{
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
              description: "group-[.toast]:text-muted-foreground",
              actionButton:
                "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
              cancelButton:
                "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
