// "use client";
import { fetchData, getData } from "@/app/lib/getData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// export const revalidate = 60;
export const productCount = async (brandId: number) => {
  const data = await getData(
    `product-app/product?ordering=-id&brand_id=${brandId}`
  );
  const productCounts = data?.count;
  return productCounts;
};

const Brands = async () => {
  const data = await getData("product-app/brand");
  // const [brands, setBrand] = useState([]);
  // const pathName = usePathname();
  const brands = data?.results;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/product-app/brand`
  //       );
  //       const jsonData = await response.json();
  //       setBrand(jsondata?.results);
  //
  //     } catch (error) {
  //       console.error("Failed to fetch data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="blog-widget mt-40">
      <h4 className="blog-widget-title">Brands</h4>
      <ul className="blog-categories">
        {brands?.map((brand: any) => (
          <li key={brand?.id}>
            <Link
              href={`/products/${brand.brand.toLowerCase()}`}
              // className={` ${pathName === "/products/zebra" ? "active" : ""}`}
            >
              {brand.brand}
            </Link>
            <span>({productCount(brand?.id)})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
