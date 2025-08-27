
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import FirstVisitPreloader from "@/components/elements/FirstVisitPreloader"

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
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-primary py-20">
                        <div className="headline-wrap style-two color-black">
                            <span className="marquee-wrap">
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
                    </div>
                </div>

            </Layout>
        </FirstVisitPreloader>
    )
}