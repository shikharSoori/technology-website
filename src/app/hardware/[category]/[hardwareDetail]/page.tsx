import AboutHero from "@/components/Hero/AboutHero";
import { formatName, reFormatName } from "@/utils/FormatName";
import Image from "next/image";
import productData from "@/utils/products.json";
import Hardware from "../../page";

interface props {
  params: {
    category: string;
    hardwareDetail: string;
  };
}

export async function generateStaticParams() {
  const products = productData?.products;
  const params = products?.map((product: any) => {
    return {
      category: String(product?.category),
      hardwareDetail: String(product?.id),
    };
  });

  return params;
}
const Page = async ({ params }: props) => {
  const harwareName = params.hardwareDetail;

  const products = productData?.products;
  const matchedHardware = products?.find(
    (product: any) => product.id === Number(harwareName)
  );
  const fallbackImage = "/path/to/default-image.png";

  return (
    <>
      <AboutHero title={"hardware"} />
      <section className="blog-area 31697 section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  <Image
                    src={matchedHardware?.image || fallbackImage}
                    width={370}
                    height={250}
                    alt="blog-img"
                  />
                </div>
                <div className="blog-content blog-details">
                  <h3 className="blog-title">{matchedHardware?.productName}</h3>

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
    </>
  );
};

export default Page;
