import Brands from "@/components/Brands/Brands";
import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/getData";
import Image from "next/image";
import { formatName } from "@/utils/FormatName";

const Products = async () => {
  const data = await getData("product-app/product?limit=0&offset=0");
  const products = data?.results;
  const brandData = await getData("product-app/brand");
  const brands = brandData?.results;

  return (
    <>
      <AboutHero title="Products" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              <Brands />
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {products?.map((product: any) => {
                  const brandId = product?.brand;
                  const matchedBrand = brands?.find(
                    (brand: any) => brand.id === brandId
                  );

                  return (
                    <div key={product?.id} className="col-md-6">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link
                            href={`/products/${matchedBrand?.brand?.toLowerCase()}/${formatName(
                              product?.productName
                            )}`}
                          >
                            <Image
                              src={product.image}
                              width={370}
                              height={250}
                              alt="product-img"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <h3 className="blog-title">
                            <Link
                              href={`/products/${matchedBrand?.brand?.toLowerCase()}/${formatName(
                                product?.productName
                              )}`}
                            >
                              {product?.productName}
                            </Link>
                          </h3>
                          <p>
                            Ideas es to obtain pain of itself, because it is
                            pain, but because occasionally ocean the Internet
                            tend to be chunks as necessary with some of
                            themoment.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
