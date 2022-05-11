import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Navbar } from "../ui";

export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta
          name="description"
          content={`Informacion sobre el Pókemon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex ${title}`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Está es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
