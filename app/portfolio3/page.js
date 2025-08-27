
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Portfolio3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio v.3">
                <div>
                    <section className="portfolio-page-three pt-140 rpt-100 pb-40 rpb-20 rel z-1">
                        <div className="container">
                            <div className="portfolio-item-four">
                                <div className="image wow fadeInLeft delay-0-2s">
                                    <img src="/assets/images/portfolio/pp-two1.jpg" alt="Portfolio" />
                                </div>
                                <div className="content wow fadeInRight delay-0-2s">
                                    <span className="category">Marketing agency</span>
                                    <h2><Link href="/portfolio-details">Business Growth System</Link></h2>
                                    <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case lobortis. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                                    <Link className="details-btn" href="/portfolio-details"><i className="fal fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="portfolio-item-four">
                                <div className="content wow fadeInRight delay-0-2s">
                                    <span className="category">Marketing agency</span>
                                    <h2><Link href="/portfolio-details">Business Growth System</Link></h2>
                                    <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case lobortis. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                                    <Link className="details-btn" href="/portfolio-details"><i className="fal fa-arrow-right" /></Link>
                                </div>
                                <div className="image wow fadeInLeft delay-0-2s">
                                    <img src="/assets/images/portfolio/pp-two2.jpg" alt="Portfolio" />
                                </div>
                            </div>
                            <div className="portfolio-item-four">
                                <div className="image wow fadeInLeft delay-0-2s">
                                    <img src="/assets/images/portfolio/pp-two3.jpg" alt="Portfolio" />
                                </div>
                                <div className="content wow fadeInRight delay-0-2s">
                                    <span className="category">Marketing agency</span>
                                    <h2><Link href="/portfolio-details">Business Growth System</Link></h2>
                                    <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case lobortis. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                                    <Link className="details-btn" href="/portfolio-details"><i className="fal fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="portfolio-item-four">
                                <div className="content wow fadeInRight delay-0-2s">
                                    <span className="category">Marketing agency</span>
                                    <h2><Link href="/portfolio-details">Business Growth System</Link></h2>
                                    <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case lobortis. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                                    <Link className="details-btn" href="/portfolio-details"><i className="fal fa-arrow-right" /></Link>
                                </div>
                                <div className="image wow fadeInLeft delay-0-2s">
                                    <img src="/assets/images/portfolio/pp-two4.jpg" alt="Portfolio" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portfolio Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Let’s Talk <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-primary py-20">
                        <div className="headline-wrap style-two color-black">
                            <span className="marquee-wrap">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}