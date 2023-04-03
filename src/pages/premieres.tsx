import { NextPage } from "next";
import React from "react";
import Layout from "@/components/Layouts";
import Premieres from "@/components/Premieres";

const PremieresPage: NextPage = () => {
  return (
    <Layout title="Premieres page">
      <Premieres />
    </Layout>
  );
};

export default PremieresPage;
