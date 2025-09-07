"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import FirstVisitPreloader from "@/components/elements/FirstVisitPreloader"
import Headline3 from "@/components/sections/Headline3"

export default function Service() {

    return (
        <FirstVisitPreloader pageKey="services">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="digital services">
                <div>
                    <ServicesThree2 />
                    <div className="lets-talk-area text-center pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Contactez-Nous <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                  
                </div>
                <div className="headline-wrap style-three color-black">
                    <span className="marquee-wrap bg-white py-15">
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                        </span>
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                        </span>
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                        </span>
                    </span>
                </div>
            </Layout>
            <style jsx global>{`
                  .bottom-ribbon-bg {
                   
                    inset: auto 0 0 0; /* stick to bottom */
                    width: 100%;
                    height: 200px;      /* adjust height as you like */
                    z-index: 100;
                    pointer-events: none;
                  }
                `}</style>

            {/* Bottom background pattern */}
            {/* <div className="bottom-ribbon-bg" aria-hidden>
                <svg
                    width="100%" height="100%"
                    viewBox="0 0 1920 300"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
               
                    <polygon points="0,300 0,100 960,300" fill="var(--secondary-color)" />

               
                    <polygon points="1920,300 1920,100 960,300" fill="var(--secondary-color)" />

                
                    <polygon points="480,300 960,100 1440,300" fill="var(--primary-color)" />
                </svg>
            </div> */}
        </FirstVisitPreloader>
    )
}