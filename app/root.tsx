import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { themeSessionResolver } from "./sessions.server";
import stylesheet from "~/tailwind.css";
import { Header } from "~/components/header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Suraj T C | Portfolio | Machine Learning",
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
  return {
    theme: getTheme(),
  };
}

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
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
        <Header />
        <main className="flex flex-col flex-1 overflow-y-scroll">
          <section className="flex-1 max-w-4xl w-full mx-auto px-1 py-2">
            <Outlet />
          </section>
          <footer className="max-w-4xl w-full mx-auto p-1">
            This is footer
          </footer>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
