// export default function Page({ params }: { params: { slug: string } }) {}

import { getData } from "@/app/lib/getData";
import Brands from "@/components/Brands/Brands";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import BrandProducts from "./BrandProducts";

interface props {
  params: {
    company: string;
  };
}

export async function generateStaticParams() {
  const data = await getData("product-app/brand?limit=0");
  const brandData = data?.results;
  const params = brandData?.map((brand: any) => ({
    company: brand.brand.toLowerCase(), // Assuming 'name' is the property you want to use as 'company'
  }));
  return params;
}
const Page = async ({ params }: props) => {
 

  return (
    <>
      {/* My Post: {params?.company} */}
      <AboutHero title="products" subTitle={params?.company} />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              <Brands />
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                <BrandProducts companyParams={params?.company} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
