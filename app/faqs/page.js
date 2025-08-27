
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faqs() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq">
                <div>
                    <section className="faq-area pt-135 rpt-100 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq-bg.jpg)' }}>
                        <div className="faq-section-inner rel">
                            <div className="faq-image-part bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq.jpg)' }}>
                                <div className="headline-wrap style-three color-black">
                                    <span className="marquee-wrap bg-white py-15">
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
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6 wow fadeInLeft delay-0-2s">
                                        <div className="faq-content-part mb-25 rmb-0">
                                            <div className="section-title mb-35">
                                                <span className="sub-title mb-10">Trusted web design agency</span>
                                                <h2>Frequently Ask Ques -tion for everyone</h2>
                                            </div>
                                            <Accordion/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-shape"><img src="/assets/images/icons/star.png" alt="Star" /></div>
                        </div>
                    </section>
                    {/* FAQ Area end */}
                    {/* Headline area start */}
                    <div className="headline-area-big pt-115 rpt-65 pb-130 rpb-100">
                        <div className="headline-wrap">
                            <span className="marquee-heading-two">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                                    <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                                    <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">development</Link>  <span>/</span>  <Link href="#">marketng</Link> <span>/</span></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Headline Area end */}
                    {/* Contact Page Area start */}
                    <section className="contact-page bgc-lighter py-130 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="contact-info-part-two rmb-55 wow fadeInLeft delay-0-2s">
                                        <div className="section-title mb-20">
                                            <h2>Get in touch</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arc dolor.</p>
                                        <div className="row mt-65">
                                            <div className="col-sm-6">
                                                <div className="c-info-item">
                                                    <span className="title">Contact</span>
                                                    <h6><Link href="/callto:+(2)871382023">+(2) 871 382 023</Link></h6>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="c-info-item">
                                                    <span className="title">Email</span>
                                                    <h6><Link href="mailto:hello@joyamen.com">hello@joyamen.com</Link></h6>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="c-info-item">
                                                    <span className="title">Address</span>
                                                    <h6>Jackpark, Ghana</h6>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="c-info-item">
                                                    <span className="title">Follow</span>
                                                    <div className="social-style-two">
                                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-content-part style-two wow fadeInRight delay-0-2s">
                                        <h3>Fill Up The Form</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="name"><i className="far fa-user" /></label>
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email"><i className="far fa-envelope" /></label>
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Email Address*" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message"><i className="far fa-edit" /></label>
                                                <textarea name="message" id="message" className="form-control" rows={4} placeholder="Enter Your Messege here" required />
                                            </div>
                                            <button type="submit" className="theme-btn style-two"><i className="fal fa-paper-plane" /> Get In Touch</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Page Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-110 rpt-80 pb-75 rpb-100">
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