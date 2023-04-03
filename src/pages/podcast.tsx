import { NextPage } from "next";
import React from "react";
import Layout from "@/components/Layouts";
import Podcast from "@/components/Podcast";

const RadioPage: NextPage = () => {
  return (
    <Layout title="Podcast page">
      <Podcast />
    </Layout>
  );
};

export default RadioPage;
