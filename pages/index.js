import React from "react";

// Components
import Layout from "../components/Layout";
import ProductsContent from "../components/products-content";

function Home() {

  return (
    <Layout>
        {/*<Filter />*/}
        <ProductsContent />
    </Layout>
  )
}

export default Home;