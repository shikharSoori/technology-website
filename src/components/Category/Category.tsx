"use client";
import { fetchData, getData } from "@/app/lib/getData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import productData from "@/utils/products.json";
import { formatName } from "@/utils/FormatName";
// export const revalidate = 60;
// export const productCount = async (brandId: number) => {
//   const data = await getData(
//     `product-app/product?ordering=-id&brand_id=${brandId}`
//   );
//   const productCounts = data?.count;
//   return productCounts;
// };
const Category = () => {
  const categories = productData?.categories;
  const pathName = usePathname();

  return (
    <div className="blog-widget mt-40">
      <h4 className="blog-widget-title">Categories</h4>
      <ul className="blog-categories">
        {categories?.map((brand: any) => {
          const path = formatName(brand.name.toLowerCase());
  
          return (
            <li key={brand?.id}>
              <Link
                href={`/hardware/${formatName(brand.name.toLowerCase())}`}
                className={` ${
                  pathName === `hardware/${path}` ? "active" : ""
                }`}
              >
                {brand.name}
              </Link>
              {/* <span>({productCount(brand?.id)})</span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
