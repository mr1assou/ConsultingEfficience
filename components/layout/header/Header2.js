import Link from "next/link"
import HeaderMenu from "../Menu"
import { Menu } from '@headlessui/react'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar }) {
    return (
        <>
            <header className={`main-header menu-absolute ${scroll ? "fixed-header" : ""}`}>
                <div className="header-top-wrap bgc-black rel z-1">
                    <div className="container">
                        <div className="header-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-5">
                                    <ul className="top-left text-center text-lg-start">
                                        <li><i className="fas fa-map-marker-alt" /> 6391 Elgin St. Celina, Delaware 10299</li>
                                        <li><i className="fas fa-envelope" /> Mail Us: <Link href="mailto:your_protect@mail.com">your_protect@mail.com</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="top-right text-center text-lg-end">
                                        <ul>
                                            <li><Link href="/about">About</Link></li>
                                            <li><Link href="/faqs">Faqs</Link></li>
                                            <li><Link href="/contact">Contact</Link></li>
                                            <li>
                                                <div className="social-style-three ms-lg-2">
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Header-Upper*/}
                <div className="header-upper">
                    <div className="container container-1695 clearfix">
                        <div className="header-inner rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo"><Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" /></Link></div>
                            </div>
                            <div className="nav-outer ms-lg-auto clearfix">
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="navbar-header">
                                        <div className="mobile-logo">
                                            <Link href="/">
                                                <img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" />
                                            </Link>
                                        </div>
                                        {/* Toggle Button */}
                                        <button type="button" className="navbar-toggle" onClick={handleMobileMenu}>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className={`navbar-collapse collapse clearfix ${isMobileMenu ? "show" : ""}`}>
                                        <HeaderMenu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            {/* Menu Button */}
                            <div className="menu-btns ms-lg-auto">
                                <Menu as="div" className="nav-search py-10">
                                    <Menu.Button className="far fa-search" />
                                    <Menu.Items as="form" action="#">
                                        <input type="text" placeholder="Search" className="searchbox" required />
                                        <button type="submit" className="searchbutton far fa-search" />
                                    </Menu.Items>
                                </Menu>
                                <Link href="/contact" className="theme-btn style-two ms-5">let,s talk</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
            </header>

        </>
    )
}
