
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TeamDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="team-profile py-140 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row gap-80 align-items-center">
                                <div className="col-lg-6 wow fadeInRight delay-0-2s">
                                    <div className="team-profile-image rmb-45">
                                        <img src="/assets/images/team/team-details.jpg" alt="Team" />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                                    <div className="team-profile-content">
                                        <h3>Alextina Ditarson</h3>
                                        <span className="designation">General Manager</span>
                                        <div className="social-style-one mt-25 mb-30">
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-instagram" /></Link>
                                            <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                        </div>
                                        <p>On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are</p>
                                        <Link href="/contact" className="theme-btn mt-30">Contact me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Team Profile Area end */}
                    {/* Skillbar Area start */}
                    <section className="skillbar-area py-95 rel z-1">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="skillbar-content rmb-35 wow fadeInRight delay-0-2s">
                                        <div className="section-title">
                                            <span className="sub-title mb-15">Trusted web design agency</span>
                                            <h2>We’re a digital design studio connecting brands to people <span>through</span> craft and culture. <i className="fas fa-asterisk" /></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="team-skillbar wow fadeInLeft delay-0-2s">
                                        <div className="skillbar" data-percent={65}>
                                            <span className="skillbar-title">Architecture Design</span>
                                            <div className="skillbar-bar" style={{ width: "65%" }}><span className="skill-bar-percent" /></div>
                                        </div>
                                        <div className="skillbar" data-percent={75}>
                                            <span className="skillbar-title">Custom Wooden Item</span>
                                            <div className="skillbar-bar" style={{ width: "75%" }}><span className="skill-bar-percent" /></div>
                                        </div>
                                        <div className="skillbar" data-percent={65}>
                                            <span className="skillbar-title">Human Interacation</span>
                                            <div className="skillbar-bar" style={{ width: "65%" }}><span className="skill-bar-percent" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Skillbar Area end */}
                    {/* Contact Page Area start */}
                    <section className="contact-page py-140 rpy-100 rel z-1">
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
                    <div className="lets-talk-area text-center bgs-cover pt-120 pb-130 rpy-90" style={{ backgroundImage: 'url(assets/images/background/tets-talk.jpg)' }}>
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text mb-50 wow zoomIn delay-0-2s">Let’s <span>Talk</span> <i className="fal fa-arrow-right" /></Link>
                            <h5 className="talk-to-email"><Link href="/contact">Contact us</Link> or send an <span>email to</span> info@Mehedii.com</h5>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}