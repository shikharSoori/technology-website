import React from "react";
import productData from "@/utils/products.json";
import AboutHero from "@/components/Hero/AboutHero";
import Category from "@/components/Category/Category";

import Link from "next/link";
import Image from "next/image";
import { formatName, reFormatName } from "@/utils/FormatName";

interface props {
  params: {
    category: string;
  };
}
export async function generateStaticParams() {
  const data = productData?.categories;
  const params = data?.map((type: any) => ({
    category: String(type.id), // Assuming 'name' is the property you want to use as 'company'
  }));

  return params;
}

const Page = ({ params }: props) => {
 
  const products = productData?.products;


  const categoryProducts = products?.filter(
    (product: any) => product.category === Number(params?.category)
  );

  return (
    <>
      <AboutHero title="hardware"  />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              <Category />
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {categoryProducts &&
                  categoryProducts?.map((product) => {
                    return (
                      <div key={product.id} className="col-md-6">
                        <div className="blog-item mt-40">
                          <div className="blog-thumb">
                            {product.productName && params?.category && (
                              <Link
                                href={`/hardware/${params?.category}/${product.id}`}
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
                              {product.productName && params?.category && (
                                <Link
                                  href={`/hardware/${params?.category}/${product.id}`}
                                >
                                  {product.productName}
                                </Link>
                              )}
                            </h3>
                            {/* <p>{product.description}</p> */}
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

export default Page;
