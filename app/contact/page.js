import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { FaRocket, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 wow fadeInRight delay-0-2s">
                            <div className="about-hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    width={500}
                                    height={700}
                                    priority
                                    src="/assets/images/testimonials/heh.png"
                                    alt="Professional Portrait"
                                    style={{
                                        height: "auto",
                                        maxHeight: "700px",
                                        width: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>

                        {/* CONTACT FORM SECTION */}
                        <section className="col-lg-6 contact-page py-140 rpy-100 rel z-1">
                            <div className="container">

                                {/* BIG TEXT ABOVE FORM */}
                                <div className="container">
                                    <div className="section-title mb-20 rmb-35 mt-30">
                                        <h2>Une idée,
                                            une envie,
                                            un projet en tête ?</h2>
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
                    </div>
                </div>
                <div className="headline-wrap style-three color-black">
                    <span className="marquee-wrap bg-white py-15">
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Confiance en Soi</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Gestion du Stress</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement Personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Motivation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Objectifs de Vie</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Bien-être</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Équilibre Vie-Travail</b><i className="fas fa-bahai" /></span>
                        </span>
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Confiance en Soi</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Gestion du Stress</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement Personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Motivation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Objectifs de Vie</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Bien-être</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Équilibre Vie-Travail</b><i className="fas fa-bahai" /></span>
                        </span>
                        <span className="marquee-inner left">
                            <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Confiance en Soi</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Gestion du Stress</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Communication</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Développement Personnel</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Motivation</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Objectifs de Vie</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Bien-être</b><i className="fas fa-bahai" /></span>
                            <span className="marquee-item"><b>Équilibre Vie-Travail</b><i className="fas fa-bahai" /></span>
                        </span>
                    </span>
                </div>
            </Layout>
             <div className="bottom-ribbon-bg" aria-hidden>
                <svg
                    width="100%" height="100%"
                    viewBox="0 0 1920 300"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Left navy shape */}
                    <polygon points="0,300 0,100 960,300" fill="var(--secondary-color)" />

                    {/* Right navy shape reaching center */}
                    <polygon points="1920,300 1920,100 960,300" fill="var(--secondary-color)" />

                    {/* Green triangle in the middle */}
                    <polygon points="480,300 960,100 1440,300" fill="var(--primary-color)" />
                </svg>
            </div>
        </>
    )
}
