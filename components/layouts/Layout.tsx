import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

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
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
