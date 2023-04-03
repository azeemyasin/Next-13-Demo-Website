import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../global/Navbar";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <main className="min-h-screen bg-primary">{children}</main>
  </div>
);

export default Layout;
