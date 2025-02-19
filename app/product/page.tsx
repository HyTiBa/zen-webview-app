import Main from "@/components/Main";
// import { ShopItem } from "@/components/ShopItemInfoCard";
import React, { Suspense } from "react";
import ProductPage from "./ProductPage";
import ProductFallback from "./ProductFallback";
// import Image from "next/image";

// import AddToCartButton from "@/components/AddToCartButton";
// import ProductFallback from "./ProductFallback";
// import ProductPage from "./ProductPage";
const page = () =>
 
  {

    return (
      <Main>
        <Suspense fallback={<ProductFallback />}>
          <ProductPage />
        </Suspense>
      </Main>
    );
  };

export default page;
