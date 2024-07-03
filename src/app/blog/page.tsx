import React, { useState } from "react";
import { getData } from "../lib/getData";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import BlogCard from "@/components/Blog/BlogCard";
import blogsData from "@/utils/Blogs.json";

const Blogs = async () => {
  const blogs = blogsData?.blogs;
  

  return (
    <>
      <AboutHero title="Blogs" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
          
            {blogs?.length > 0 &&
              blogs.map((blogitem: any) => (
                <div key={blogitem.id} className="col-lg-4 col-md-6">
                  <BlogCard blog={blogitem} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
