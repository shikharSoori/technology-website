import { getData } from "@/app/lib/getData";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName, reFormatName } from "@/utils/FormatName";
import Image from "next/image";
interface props {
  params: {
    company: string;
    productDetail: string;
  };
}
// export function generateStaticParams() {
//   return [
//     { company: "a", productDetail: "1" },
//     { company: "b", productDetail: "2" },
//     { company: "c", productDetail: "3" },

//   ];
// }

export async function generateStaticParams() {
  const data = await getData("product-app/product?limit=0");
  const data1 = await getData("product-app/brand?limit=0");

  const productData = data?.results;
  const brandData = data1?.results;

  const params = productData.map((product: any) => {
    const brandName = brandData?.find(
      (brand: any) => brand.id === product?.brand
    );
    return {
      company: brandName?.brand?.toLowerCase(),
      productDetail: formatName(product?.productName),
    };
  });

  return params;
}
const Page = async ({ params }: props) => {
  const productName = reFormatName(params.productDetail);

  const productData = await getData("product-app/product?limit=0&offset=0");
  const products = productData?.results;
  const matchedProduct = products?.find(
    (product: any) => product.productName === productName
  );

  return (
    <div>
      <AboutHero
        title={"products"}
        subTitle={reFormatName(params.productDetail)}
      />

      <section className="blog-area 31697 section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  <Image
                    src={matchedProduct.image}
                    width={370}
                    height={250}
                    alt="blog-img"
                  />
                </div>
                <div className="blog-content blog-details">
                  <h3 className="blog-title">{matchedProduct.productName}</h3>

                  <p>
                    Bigger ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate perferendis consequuntur illo aliquid nihil ad
                    neque, debitis praesentium libero ullam asperiores
                    exercitationem deserunt inventore facilis, officiis,
                  </p>

                  <p>
                    aliquam maiores asperiores recusandae commodi blanditiis
                    ipsum tempora culpa possimus assumenda ab quidem a
                    voluptatum quia natus? Ex neque, saepe reiciendis quasi
                    velit perspiciatis error vel quas quibusdam autem nesciunt
                    voluptas odit quis dignissimos eos aspernatur voluptatum est
                    repellat. Pariatur praesentium, corrupti deserunt ducimus
                    quo doloremque nostrum aspernatur saepe cupiditate sit autem
                    exercitationem debitis, maiores vitae perferendis nemo?
                    Voluptas illo, animi temporibus quod earum molestias eaque,
                    iure rem amet autem dignissimos officia dolores numquam
                    distinctio esse voluptates optio pariatur aspernatur omnis?
                    Ipsam qui commodi velit natus reiciendis quod quibusdam nemo
                    eveniet similique animi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
