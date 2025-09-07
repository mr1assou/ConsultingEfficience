"use client"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Headline3 from "@/components/sections/Headline3"
import Hero1 from "@/components/sections/Hero1"
import LetsTalk1 from "@/components/sections/LetsTalk1"
import Testimonials2 from "@/components/sections/Testimonials2"
import Video2 from "@/components/sections/Video2"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import Client2 from "@/components/sections/Client2"
import FirstVisitPreloader from "@/components/elements/FirstVisitPreloader"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import VideoPopup from "@/components/elements/VideoPopup"

export default function Home() {
    const [counters, setCounters] = useState({
        clients: 0,
        years: 0,
        consultations: 0,
        formations: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const targetCounts = { clients: 250, years: 30, consultations: 1000, formations: 1200 };
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                clients: Math.floor(targetCounts.clients * progress),
                years: Math.floor(targetCounts.years * progress),
                consultations: Math.floor(targetCounts.consultations * progress),
                formations: Math.floor(targetCounts.formations * progress)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounters(targetCounts);
            }
        }, stepDuration);
    };

    return (
        <FirstVisitPreloader pageKey="home">
            <Layout headerStyle={1} footerStyle={1} bodyCls="home-one">
                {/* <Hero1 />
                <Headline3 /> */}
                <section className="about-page-hero bg-primary-shape rel z-1">
                    <div className="container">
                        <div className="row align-items-end justify-content-between">
                            <div className="col-lg-8 wow fadeInLeft delay-0-2s">
                                <div className="about-hero-content pt-50 rpt-95 pb-95">
                                    <h1>No sommes créative et professionnelle</h1>
                                    <p>Nous travaillons en étroite collaboration avec nos clients tout au long du processus de conseil, depuis l'analyse initiale jusqu'à la mise en œuvre finale, afin de garantir que nous répondons à leurs attentes et dépassons leurs objectifs.</p>
                                    {/* <Link href="/contact" className="theme-btn style-two">Contactez-Nous</Link> */}
                                    <VideoPopup style={1}/>
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
                                <div className="about-hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        width={500}
                                        height={700}
                                        priority
                                        src="/assets/images/testimonials/heho.png"
                                        alt="Professional Portrait"
                                        style={{
                                            height: "auto",
                                            maxHeight: "700px",
                                            width: "100%",
                                            objectFit: "contain",
                                            borderRadius: "20px",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="headline-wrap style-three color-black">
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
                    </div> */}
                </section>

                {/* Second Horizontal Autoplay Slider */}
                <div className="headline-wrap style-three color-black mt-25">
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

                <About1 />

                <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="our-experience-years rmb-55 wow fadeInLeft delay-0-2s">
                                    <span className="years">12</span>
                                    <span className="text" style={{ color: '#ffffff', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)', fontWeight: 'bold', fontSize: '58px', letterSpacing: '2px' }}>années d'expérience</span>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12">
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


                <div ref={counterRef} className="counter-two-area pt-45 pb-140" style={{ backgroundColor: '#f8f9fa', padding: '60px 0 140px 0' }}>
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="wow fadeInUp delay-0-2s" style={{
                                color: '#183D58',
                                fontSize: '22px',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textShadow: 'none',
                                marginBottom: '20px',
                                position: 'relative'
                            }}>
                                nous sommes fiers de travailler avec un large éventail des clients
                            </h2>
                            <div style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#183D58',
                                margin: '0 auto',
                                borderRadius: '2px'
                            }}></div>
                        </div>

                        <div className="row no-gap">
                            <div className="col-lg-3 col-6 col-small">
                                <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s" style={{ textAlign: 'center', padding: '30px 15px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '10px', border: '2px solid #e9ecef' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.clients}+</span>
                                    <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Clients satisfaits</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-small">
                                <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s" style={{ textAlign: 'center', padding: '30px 15px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '10px', border: '2px solid #e9ecef' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.years}+</span>
                                    <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Années d'expérience</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-small">
                                <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s" style={{ textAlign: 'center', padding: '30px 15px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '10px', border: '2px solid #e9ecef' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.consultations}+</span>
                                    <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Consultations</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-small">
                                <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s" style={{ textAlign: 'center', padding: '30px 15px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '10px', border: '2px solid #e9ecef' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '15px' }}>{counters.formations}+</span>
                                    <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Formations</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                    <div className="container">
                        <div className="row justify-content-between align-items-center g-5">
                            <div className="col-lg-6">
                                <div className="about-images wow fadeInLeft delay-0-2s">
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <div className="about-image-wrapper" style={{
                                                borderRadius: '15px',
                                                overflow: 'hidden',
                                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                                marginBottom: '20px'
                                            }}>
                                                <Image 
                                                    src="/assets/images/hero/eng4.png" 
                                                    alt="Excellence commerciale et développement de soi" 
                                                    width={700} 
                                                    height={380} 
                                                    priority
                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        maxWidth: '100%',
                                                        display: 'block'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="qualiopi-certification" style={{
                                                textAlign: 'center',
                                                padding: '20px',
                                                backgroundColor: '#f8f9fa',
                                                borderRadius: '12px',
                                                border: '2px solid #e9ecef',
                                                marginTop: '10px'
                                            }}>
                                                <h6 style={{
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                        color: '#183D58',
                                                    marginBottom: '15px'
                                                }}>
                                                    Certification Qualiopi
                                                </h6>
                                                <div className="qualiopi-image-wrapper" style={{
                                                    borderRadius: '10px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                                    maxWidth: '300px',
                                                    margin: '0 auto'
                                                }}>
                                                    <Image
                                                        src="/assets/images/hero/qualiopi.png"
                                                        alt="Certification Qualiopi"
                                                        width={300}
                                                        height={200}
                                                        priority
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            maxWidth: '100%',
                                                            display: 'block'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content wow fadeInRight delay-0-2s">
                                    <div className="section-title mb-30">
                                        <span className="sub-title mb-15" style={{
                                            display: 'block',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            color: '#307926',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            marginBottom: '20px'
                                        }}>
                                            Excellence & Certification
                                        </span>
                                        <h3 style={{
                                            fontSize: 'clamp(32px, 4vw, 42px)',
                                            fontWeight: '800',
                                            color: '#183D58',
                                            marginBottom: '30px',
                                            lineHeight: '1.2',
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                            Un organisme de formation qui conjugue <span style={{ color: '#307926' }}>excellence commerciale</span> et <span style={{ color: '#307926' }}>développement de soi</span>
                                        </h3>
                                        
                                        <div style={{ marginBottom: '25px' }}>
                                            <p style={{
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#183D58',
                                                fontWeight: '500',
                                                marginBottom: '20px'
                                            }}>
                                                La <strong>certification Qualiopi</strong> est un gage de qualité pour nos clients.
                                            </p>
                                        </div>

                                        <div style={{ marginBottom: '25px' }}>
                                            <p style={{
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#183D58',
                                                fontWeight: '500',
                                                marginBottom: '20px'
                                            }}>
                                                Elle atteste de notre engagement à fournir des formations <strong>efficaces et conformes</strong> aux exigences des financeurs.
                                            </p>
                                        </div>

                                        <div style={{
                                            padding: '25px',
                                            backgroundColor: '#f8f9fa',
                                            borderRadius: '15px',
                                            borderLeft: '4px solid #307926',
                                            marginTop: '30px'
                                        }}>
                                            <p style={{
                                                fontSize: 'clamp(18px, 3vw, 20px)',
                                                lineHeight: '1.6',
                                                color: '#183D58',
                                                fontWeight: '700',
                                                margin: 0,
                                                textAlign: 'center',
                                                fontStyle: 'italic'
                                            }}>
                                                Choisir nos services certifiés, c'est opter pour une expérience d'apprentissage à la fois enrichissante et fiable <i className="fas fa-asterisk" style={{ color: '#307926', marginLeft: '8px' }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Video2 />

                <Client2 />
                <Testimonials2 />
                <LetsTalk1 />

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