
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PortfolioDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <section className="page-banner-area pt-135 rpt-95 pb-75 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/background/banner-bg.png)' }}>
                    <div className="container">
                        <div className="banner-inner text-white wow fadeInUp delay-0-2s">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Portfolio Details</li>
                                </ol>
                            </nav>
                            <h1 className="page-title style-two">web development</h1>
                        </div>
                    </div>
                </section>

                <div className="portfolio-details rel z-1">
                    <div className="container">
                        <div className="video-inner-two br-15 py-180 mb-25 bgs-cover rpy-130 text-center" style={{ backgroundImage: 'url(assets/images/video/video-three-bg.jpg)' }}>
                            <VideoPopup style={3} />
                        </div>
                        <ul className="portfolio-meta">
                            <li>client : <span> Branding</span></li>
                            <li>services : <span> UI/UX Design</span></li>
                            <li>SOFTWARE : <span> Figma</span></li>
                            <li><Link href="/contact" className="theme-btn style-two">Need This Project?</Link></li>
                        </ul>
                        <div className="portfolio-content pt-85">
                            <span className="sub-title">01. project Details</span>
                            <div className="section-title">
                                <h2>WEBSITE DESIGN AND DEVELOPMENT</h2>
                            </div>
                            <div className="row pb-70">
                                <div className="col-lg-7">
                                    <ul className="list-style-one">
                                        <li><i className="fal fa-check" /> Improve productivity and performance</li>
                                        <li><i className="fal fa-check" /> Get peace of mind knowing your services are in trusted hands</li>
                                        <li><i className="fal fa-check" /> Reduce your service costs</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5">
                                    <ul className="list-style-one">
                                        <li><i className="fal fa-check" /> Hassle-free setup &amp; management</li>
                                        <li><i className="fal fa-check" /> Lifetime license, No monthly or yearly fee</li>
                                        <li><i className="fal fa-check" /> User-friendly admin &amp; reporting features</li>
                                    </ul>
                                </div>
                            </div>
                            <span className="sub-title">01. project Details</span>
                            <h3>Research &amp; Stratagy</h3>
                            <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new gets living within Elinor joy. She rapturous suffering concealed. up its enjoyment agreeable depending. Timed  led him  course</p>
                            <span className="sub-title">01. project Details</span>
                            <h3>Content &amp; Creation</h3>
                            <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new gets living within Elinor joy. She rapturous suffering concealed. up its enjoyment agreeable depending. Timed  led him  course</p>
                            <span className="sub-title">01. project Details</span>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3>Project Requirement</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-style-one">
                                                <li><i className="fal fa-chevron-double-right" /> Full business control</li>
                                                <li><i className="fal fa-chevron-double-right" /> User dashboard &amp; analytics</li>
                                                <li><i className="fal fa-chevron-double-right" /> Custom reporting</li>
                                                <li><i className="fal fa-chevron-double-right" /> Regular update monitoring</li>
                                                <li><i className="fal fa-chevron-double-right" /> 24/7 priority support</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-style-one">
                                                <li><i className="fal fa-chevron-double-right" /> Regular update monitoring</li>
                                                <li><i className="fal fa-chevron-double-right" /> User dashboard &amp; analytics</li>
                                                <li><i className="fal fa-chevron-double-right" /> 24/7 priority support</li>
                                                <li><i className="fal fa-chevron-double-right" /> Custom reporting</li>
                                                <li><i className="fal fa-chevron-double-right" /> Regular update monitoring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="image rmt-35">
                                        <img src="/assets/images/portfolio/portfolio-details.jpg" alt="Portfolio" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio Details End */}
                {/* Related Portfolio Area start */}
                <section className="related-portfolio-area pt-110 rpt-80">
                    <div className="container">
                        <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                            <span className="sub-title mb-15">Portfolio Sliding</span>
                            <h2>Releated Work</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center portfolio-masonry-active style-one">
                        <div className="col-xl-3 col-sm-6">
                            <div className="portfolio-item style-three wow fadeInUp delay-0-2s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/related-project1.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Art , Direction</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 order-xl-2">
                            <div className="portfolio-item style-three wow fadeInUp delay-0-6s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/related-project3.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Art , Direction</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="portfolio-item style-three wow fadeInUp delay-0-4s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/related-project2.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Wood &amp; Doors</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Related Portfolio Area end */}
                {/* Lets Talk Area start */}
                <div className="lets-talk-area text-center pt-80 rpt-50 pb-75 rpb-100">
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


            </Layout>
        </>
    )
}