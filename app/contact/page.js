
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { FaRocket, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <section className="contact-page py-140 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row pb-60 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-2s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact1.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Numéro de téléphone</h5>
                                            <Link href="/callto:+12555686523">+336- 5010 - 3659</Link><br />
                                            <Link
                                                href="/callto:+12555686523"
                                                style={{ visibility: "hidden" }}
                                            >
                                                +336- 5010 - 3659
                                            </Link>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-4s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact2.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Ligne d'adresse</h5>
                                            <span>France - Benelux<br /> <span   style={{ visibility: "hidden" }}>10013,USA</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-6s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact3.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Phone Number</h5>
                                            <span>Lundi - vendredi<br /> 09:00 AM - 05:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-page-form wow fadeInUp delay-0-2s">
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-6 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <input type="text" id="fname" name="fname" className="form-control" placeholder="Prénom*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-4s">
                                            <div className="form-group">
                                                <input type="text" id="lname" name="lname" className="form-control" placeholder="Nom*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Adresse email*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-4s">
                                            <div className="form-group">
                                                <input type="text" id="phone" name="phone" className="form-control" placeholder="Numéro de téléphone*" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control" rows={8} placeholder="Enter Votre Messege" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center wow fadeInUp delay-0-2s">
                                            <button type="submit" className="theme-btn style-two">Envoyer</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* Contact Page Area end */}
                    {/* Location Map Area Start */}
                    <div className="contact-page-map wow fadeInUp delay-0-2s">
                        <div className="our-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21071.280586605048!2d6.152832675913519!3d48.68808394490987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794986e17a692cd%3A0x4ed671b10d82498d!2sNancy%2C%20France!5e0!3m2!1sen!2sma!4v1756075593008!5m2!1sen!2sma" style={{ border: 0, width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
               
                </div>

            </Layout>
        </>
    )
}