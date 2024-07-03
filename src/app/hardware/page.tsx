import Brands from "@/components/Brands/Brands";
import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/getData";
import Image from "next/image";
import { formatName } from "@/utils/FormatName";
import Category from "@/components/Category/Category";
import productData from "@/utils/products.json";
const Hardware = () => {
  const products = productData?.products;
  return (
    <>
      <AboutHero title="Hardware" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              <Category />
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {products?.map((product: any) => {
                  return (
                    <div key={product?.id} className="col-md-6">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link
                            href={`/hardware/${product.category}/${
                              product?.id
                            }`}
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
                              href={`/hardware/${product.category}/${product?.id}`}
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

export default Hardware;
