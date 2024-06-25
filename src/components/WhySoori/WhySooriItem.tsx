"use client";
import { fetchData } from "@/app/lib/getData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Reason {
  image: string;
  title: string;
}
const WhySooriItem = () => {
  const [reasonData, setReasonData] = useState<Reason[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData("product-app/why-soori?limit=0");
      console.log(data);
      if (data && data.results) {
        setReasonData(data.results);
      }
    })();
  }, []);
  console.log(reasonData, "reasonData");
  return (
    <>
      {reasonData?.map((why: any, id: number) => {
        return (
          <React.Fragment key={id + 1}>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={why.image} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">{why.title}</h3>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default WhySooriItem;
