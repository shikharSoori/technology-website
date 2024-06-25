// "use client";
import Link from "next/link";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { getData } from "@/app/lib/getData";
import Slider from "@/components/Carousel/Carousel";
import BlogCard from "../Blog/BlogCard";
import { formatName } from "@/utils/FormatName";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = async () => {
  return (
    <footer>
      <div className="footer-widget-area gray-bg section-padding ">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-6 col-md-6">
              <div className="footer-single-widget mt-40">
                <div className="widget-logo">
                  <Link href="/">
                    <Image src={logo} height={100} width={200} alt="logo" />
                  </Link>
                </div>
                <div className="widget-body">
                  <p className="desc">
                    Ideas es to obtain pain of because the because
                    occasionallyght ocean he and chunks as necessary
                  </p>
                  <ul className="contact-info">
                    <li>
                      <span>Address: </span> 56 Sheltek Tower, Cental Mall New
                      Yourk City, USA
                    </li>
                    <li>
                      <span>Phone:</span> 02156 987 456 <br />
                      35621 895 456
                    </li>
                    <li>
                      <span>Web:</span> info@example.com <br />
                      www.example.com
                    </li>
                  </ul>
                  <div className="mt-4 footer-social-link  d-flex">
                    <Link href="#">
                      <FaFacebook size={24} />
                    </Link>
                    <Link href="#">
                      <FaTwitter size={24} />
                    </Link>
                    <Link href="#">
                      <FaInstagram size={24} />
                    </Link>
                    <Link href="#">
                      <FaLinkedin size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-single-widget mt-40">
                <h3 className="widget-title">Our Link</h3>
                <div className="widget-body">
                  <ul className="useful-link">
                    <li>
                      <Link
                        href="/"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/products"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/blog"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-single-widget mt-40">
                <h3 className="widget-title">Solutions</h3>
                <div className="widget-body">
                  <ul className="useful-link">
                    <li>
                      <Link
                        href="solutions/cubix"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Cubix
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="solutions/inService"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        InService
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="solutions/activ"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Activ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="solutions/trackline"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Trackline
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-single-widget mt-40">
                <h3 className="widget-title">Products</h3>
                <div className="widget-body">
                  <ul className="useful-link">
                    <li>
                      <Link
                        href="products/wacom"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Wacom
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/products/logitech"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Logitech
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="products/zebra"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Zebra
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/products/hid"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        HID
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-text text-center">
            <p>
              &copy; 2021 <b>Soori Technology</b> Developed By{" "}
              <i className="fa fa-heart text-danger"></i> by{" "}
              <Link href="/">
                <b>Soori Solutions</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
