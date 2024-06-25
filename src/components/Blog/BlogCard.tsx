"use client";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogCard = ({ blog }: any) => {
  const maxLength = 100;

  return (
    <>
      <div className="blog-item mt-40">
        <div className="blog-thumb">
          <Link href={`/blog/${formatName(blog.name)}`}>
            <Image height={250} src={blog.image} alt={"hello"} width={370} />
          </Link>
        </div>
        <div className="blog-content">
          <h3 className="blog-title">
            <Link href={`/blog/${formatName(blog.name)}`}>{blog.name}</Link>
          </h3>

          {blog.description.length >= maxLength
            ? `${blog.description.substr(0, maxLength).trim()}...`
            : blog.description}

          <div className="blog-meta">
            <Link href="#">{blog.createdDateBs}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
