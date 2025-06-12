import React from "react";
import { Product } from "../../components/Product/Product.jsx";
import { ProductCard } from "../../components/ProductCard/ProductCard.jsx";
import Layout from "../Layout/Layout.jsx";

export function ProductViewPage() {
  return (
    <>
      <Layout>
        <Product />
        <ProductCard quantidadeProdutos={4} />
      </Layout>
    </>
  );
}
