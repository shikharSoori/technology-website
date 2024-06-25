"use client";
import { fetchData } from "@/app/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  productName: string;
  description: string;
  image: string;
}

interface Brand {
  id: string;
  brand: string;
}

const BrandProducts = ({ companyParams }: { companyParams: any }) => {
  const [brandData, setBrandData] = useState<Brand[]>([]);
  const [brandProducts, setBrandProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData("product-app/brand?limit=0");
      if (data && data.results) {
        setBrandData(data.results);
      }
    })();
  }, []);

  useEffect(() => {
    if (brandData.length > 0 && companyParams) {
      const matchedBrand = brandData.find((brand) =>
        typeof brand.brand === "string"
          ? brand.brand.toLowerCase() === companyParams.toLowerCase()
          : false
      );

      if (matchedBrand) {
        (async () => {
          const data = await fetchData(
            `product-app/product?ordering=-id&brand_id=${matchedBrand.id}&offset=0&limit=0`
          );
          setBrandProducts(data.results);
        })();
      }
    }
  }, [brandData]);

  return (
    <>
      {brandProducts &&
        brandProducts?.map((product) => {
          return (
            <div key={product.id} className="col-md-6">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  {product.productName && companyParams && (
                    <Link
                      href={`/products/${companyParams}/${product.productName
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <Image
                        src={product.image}
                        width={370}
                        height={250}
                        alt={product.productName}
                      />
                    </Link>
                  )}
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    {product.productName && companyParams && (
                      <Link
                        href={`/products/${companyParams}/${product.productName
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        {product.productName}
                      </Link>
                    )}
                  </h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BrandProducts;
