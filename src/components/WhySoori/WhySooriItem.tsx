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

      if (data && data.results) {
        setReasonData(data.results);
      }
    })();
  }, []);
  return (
    <>
      {reasonData?.map((why: any, id: number) => {
        return (
          <React.Fragment key={id + 1}>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon d-flex justify-content-center">
                  <Image src={why.image} alt="icon" width={35} height={35} />
                </div>
                <h3
                  className="mt-2 text-center"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  {why.title}
                </h3>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default WhySooriItem;
