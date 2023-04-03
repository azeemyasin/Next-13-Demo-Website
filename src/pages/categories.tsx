import Layout from "../components/Layouts";
import Categories from "../components/Categories";
import { NextPage } from "next";

const CategoriesPage: NextPage = () => {
  return (
    <Layout title="Categories page">
      <Categories />
    </Layout>
  );
};

export default CategoriesPage;
