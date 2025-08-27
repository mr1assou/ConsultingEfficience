
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="blog page">
                <div>
                    {/* Blog Area start */}
                    <section className="blog-page-area pt-140 rpt-100 rel z-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page1.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page2.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page3.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page4.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page5.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-item-two style-two wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-page6.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2023</Link></li>
                                                <li><Link href="#"><i className="fal fa-comments" /> Coments (03)</Link></li>
                                            </ul>
                                            <h5><Link href="/blog-details">Business Growth System Canvas</Link></h5>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Blog Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-55 rpt-30 pb-75 rpb-100">
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
                    {/* Headline Area end */}
                </div>

            </Layout>
        </>
    )
}