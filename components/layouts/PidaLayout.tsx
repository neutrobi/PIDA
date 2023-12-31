import { FC } from "react";
import Head from "next/head";

import { Navbar, SideMenu, Fotter } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const PidaLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: "80px auto",
          maxWidth: "1920px",
        }}
      >
        {children}
      </main>

      <footer>
        <Fotter />
      </footer>
    </>
  );
};
