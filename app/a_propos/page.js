
import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import Image from "next/image"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function About() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    {/* About Hero Area start */}
                    <section className="about-page-hero bg-primary-shape rel z-1">
                        <div className="container">
                            <div className="row align-items-end justify-content-between">
                                <div className="col-lg-8 wow fadeInLeft delay-0-2s">
                                    <div className="about-hero-content pt-135 rpt-95 pb-95">
                                        <h1>Nous sommes créative et professionnelle</h1>
                                        <p>Nous travaillons en étroite collaboration avec nos clients tout au long du processus de conseil, depuis l’analyse initiale jusqu’à la mise en œuvre finale, afin de garantir que nous répondons à leurs attentes et dépassons leurs objectifs.</p>
                                        <Link href="/contact" className="theme-btn style-two">Contactez-Nous</Link>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6">
                                                {/* <div className="hero-scroll-down mt-60 wow fadeInDown delay-0-6s">
                                                    <Link href="#about"><i className="far fa-arrow-down" /></Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInRight delay-0-2s">
                                    <div className="about-hero-image">
                                        <Image width={600} height={870} priority src="/assets/images/testimonials/heho.png" alt="Testimonials" style={{ height: "900px;" }} />
                                    </div>
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
                    </section>
                    {/* About Hero Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-lighter py-20">
                        <div className="headline-wrap style-two">
                            <span className="marquee-wrap for-arrow-icon">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>Prospection & Vente</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Communication & Influence</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Développement personnel</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Leadership</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Mieux-être durable</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>Prospection & Vente</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Communication & Influence</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Développement personnel</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Leadership</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Mieux-être durable</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>Prospection & Vente</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Communication & Influence</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Développement personnel</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Leadership</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>Mieux-être durable</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Headline Area end */}
                    {/* About Area start */}
                    <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <div className="our-experience-years rmb-55 wow fadeInLeft delay-0-2s">
                                        <span className="years">12</span>
                                        <span className="text">années d'expérience</span>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-content wow fadeInRight delay-0-2s">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-15">Notre objectif</span>
                                            <h2>aider chacun à révéler son potentiel, à améliorer sa confiance en soi et à acquérir les outils nécessaires pour relever les défis actuels et futurs.<i className="fas fa-asterisk" /></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Area end */}
                    {/* Portfolio Area start */}
                    {/* Portfolio Area end */}
                    {/* Counter Two Area start */}
                    <ServicesThree2 />
                    <div className="counter-two-area pt-45 pb-140">
                        <div className="container">
                            <span className="sub-title-style-two mb-40 wow fadeInUp delay-0-2s">nous sommes fiers de travailler avec un large éventail des clients</span>
                            <div className="row no-gap">
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                                        <CounterUp count={250} time={3} plus />
                                        <h6 className="counter-title">Clients satisfaits</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                                        <CounterUp count={30} time={3} plus />
                                        <h6 className="counter-title">Years of build</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                                        <CounterUp count={1000} time={3} />
                                        <h6 className="counter-title">Consultation</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                                        <CounterUp count={1200} time={3} />
                                        <h6 className="counter-title">Formations</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Headline Area end */}
                    {/* Team Area start */}
                    <section className="faq-area py-135 rpy-100 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq-bg.jpg)' }}>
                        <div className="faq-section-inner rel">
                            <div className="faq-image-part bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq.png)' }}>
                                <div className="headline-wrap style-three color-black">
                                    <span className="marquee-wrap bg-white py-15">
                                        <span className="marquee-inner left">
                                            <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                        </span>
                                        <span className="marquee-inner left">
                                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                        </span>
                                        <span className="marquee-inner left">
                                            <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6 wow fadeInLeft delay-0-2s">
                                        <div className="faq-content-part mb-25 rmb-0">
                                            <div className="section-title mb-35">
                                                <span className="sub-title mb-10">Agence de consulting de confiance</span>
                                                <h2>Questions fréquemment posées sur pour tout le monde</h2>
                                            </div>
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-shape"><img src="/assets/images/icons/star.png" alt="Star" /></div>
                        </div>
                    </section>
                    <section className="team-area overflow-hidden pt-40 rpt-50 pb-120 rpb-70 rel z-1">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                                        <span className="sub-title mb-15">Directeur d'AGENCE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container container-1450">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member style-two wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/hero/ryad.jpg" alt="Team" />
                                        </div>
                                        <div className="description">
                                            <div className="title">
                                                <h5>RYAD Mimeche</h5>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-btn pt-30 text-center">
                                <Link href="/contact" className="theme-btn style-three">Contactez-moi</Link>
                            </div>
                        </div>
                    </section>
                    {/* FAQ Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center bgs-cover pt-120 pb-130 rpy-90" style={{ backgroundImage: 'url(assets/images/background/tets-talk.jpg)' }}>
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text mb-50 wow zoomIn delay-0-2s">Contactez -<span>Nous</span> <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                </div>

            </Layout>
        </>
    )
}