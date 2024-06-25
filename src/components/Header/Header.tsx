"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../app/globals.css";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import "./header.scss";
import { MdCompress } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsSticky(scroll >= 300);
  };

  // Add the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Off-Canvas Open/Close
  const openOffCanvas = () => {
    setIsOffCanvasOpen(true);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  return (
    <>
      <header className={`header-area ${isSticky ? "is-sticky" : ""}`}>
        {/* Main Header */}
        <div className="main-header d-none d-lg-block">
          {/* Header Top Section */}
          <div className="header-top theme-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-sm-4">
                  <div className="header-top-left text-left text-sm-left">
                    Call us:<Link href="tel:+968573979894"> 01254 789 321</Link>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="header-settings-bar d-flex justify-content-end">
                    <div className="header-social-link d-flex">
                      <Link href="#">
                        <FaFacebook size={16} />
                      </Link>
                      <Link href="#">
                        <FaTwitter size={16} />
                      </Link>
                      <Link href="#">
                        <FaInstagram size={16} />
                      </Link>
                      <Link href="#">
                        <FaLinkedin size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Menu Section */}
          <div
            className={`main-menu-wrapper sticky ${
              pathName === "/" ? "header-transparent" : ""
            } ${isSticky ? "is-sticky" : ""}`}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="brand-logo">
                    <Link href="/">
                      <Image
                        src={Logo}
                        height={40}
                        width={140}
                        alt="logo"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="main-menu-inner">
                    <nav className="main-menu">
                      <ul>
                        {/* Example Menu Items */}
                        <li
                          className={`link ${pathName === "/" ? "active" : ""}`}
                        >
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/about" ? "active" : ""
                          }`}
                        >
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/solutions">Solutions</Link>
                          <ul className="dropdown">
                            <li>
                              <Link href="/solutions/cubixaa">
                                Warehouse Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/assets">
                                Assets & Maintainence
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/service">
                                Service & Maintainence
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/zebra">HR & Payroll</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/products">Products</Link>
                          <ul className="dropdown">
                            <li>
                              <Link href="/products/wacom">Wacom</Link>
                            </li>
                            <li>
                              <Link href="/products/hid">HID</Link>
                            </li>
                            <li>
                              <Link href="/products/logitech">Logitech</Link>
                            </li>
                            <li>
                              <Link href="/products/zebra">Zebra</Link>
                            </li>
                          </ul>
                        </li>

                        <li
                          className={`link ${
                            pathName === "/blog" ? "active" : ""
                          }`}
                        >
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/team" ? "active" : ""
                          }`}
                        >
                          <Link href="/team">Team</Link>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/contact" ? "active" : ""
                          }`}
                        >
                          <Link href="/contact">Contact</Link>
                        </li>
                        {/* Add more menu items as needed */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div
          className={`mobile-header d-lg-none d-md-block ${
            isSticky ? "is-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mobile-main-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image
                        src={Logo}
                        height={40}
                        width={140}
                        alt="logo"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="mobile-menu-toggler">
                    <button className="mobile-menu-btn" onClick={openOffCanvas}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Off-Cavas Menu */}
        <aside
          className={`off-canvas-wrapper ${isOffCanvasOpen ? "open" : ""}`}
        >
          <div className="off-canvas-overlay" onClick={closeOffCanvas}></div>
          <div className="off-canvas-inner-content">
            <div
              className="btn-close-off-canvas d-flex justify-content-center align-items-center"
              onClick={closeOffCanvas}
            >
              <RxCross2 />
            </div>

            <div className="off-canvas-inner">
              {/* <div className="search-box-offcanvas">
                <form>
                  <input type="text" placeholder="Search Here..." />
                  <button className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}

              <div className="mobile-navigation">
                <nav>
                  <ul className="mobile-menu">
                    {/* Example Menu Items */}
                    <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/products">Products</Link>
                      {/* Add more menu items as needed */}
                      <ul className="dropdown">
                        <li>
                          <Link href="/products/wacom">Wacom</Link>
                        </li>
                        <li>
                          <Link href="/products/hid">HID</Link>
                        </li>
                        <li>
                          <Link href="/products/logitech">Logitech</Link>
                        </li>
                        <li>
                          <Link href="/products/zebra">Zebra</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/solutions">Solutions</Link>
                      {/* Add more menu items as needed */}
                      <ul className="dropdown">
                        <li>
                          <Link href="/solutions/wacom">Warehouse</Link>
                        </li>
                        <li>
                          <Link href="/solutions/hid">HID</Link>
                        </li>
                        <li>
                          <Link href="/solutions/logitech">Logitech</Link>
                        </li>
                        <li>
                          <Link href="/solutions/zebra">Zebra</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="">
                      <Link href="/team">Team</Link>
                    </li>
                    <li className="">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
