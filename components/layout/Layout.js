
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"

export default function Layout({ headerStyle, footerStyle, bodyCls, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!isSidebar)
        !isSidebar ? document.body.classList.add("side-content-visible") : document.body.classList.remove("side-content-visible")
    }

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <div className={`page-wrapper ${bodyCls ? bodyCls : ""}`}>
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

                <main className="main">
                    {/* {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />} */}

                    {children}
                </main>

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}

                <BackToTop />
            </div>
        </>
    )
}
