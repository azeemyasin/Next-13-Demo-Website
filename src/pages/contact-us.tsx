import { NextPage } from "next";
import React from "react";
import Contact from "@/components/Contact";
import Layout from "@/components/Layouts";

const ContactPage: NextPage = () => {
  return (
    <Layout title="Contact-us page">
      <Contact />
    </Layout>
  );
};

export default ContactPage;
