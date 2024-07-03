"use client";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdHeight } from "react-icons/md";


const SingleServices = ({ index, image, name, description }: any) => {
  const maxLength = 75;

  return (
    <>
      <div className="service-policy-item mt-10">
        <div className="service-policy-icon">
          <Image src={image} alt="icon" width={50} height={50} />
        </div>
        <Link className={"know-more"} href={`/services/${formatName(name)}`}>
          <h3 className="service-policy-title">{name}</h3>
        </Link>

        <p className="service-policy-desc">
          {/* {expandedCardIndices.includes(index)
            ? description
            : `${description.slice(0, 147)} `} */}
          {description.length >= maxLength
            ? `${description.substr(0, maxLength).trim()}...`
            : description}
        </p>
        <Link className={"know-more"} href={`/services/${formatName(name)}`}>
          Know More
        </Link>
      </div>
    </>
  );
};

export default SingleServices;
