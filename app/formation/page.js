

'use client'
import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState, useEffect } from "react"
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import PagePreloader from "@/components/elements/PagePreloader"
import Image from "next/image"

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const images = [
    {
        id: 1,
        url: '/assets/images/services/service3.png',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/services/service1.png',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/assets/images/services/service4.png',
        title: 'Image 3',
        description: 'This is the third image',
    }
]
export default function ServiceDetails() {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [counters, setCounters] = useState({
        clients: 0,
        formations: 0,
        heures: 0
    })
    const [hasAnimated, setHasAnimated] = useState(false)

    const openLightbox = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (!hasAnimated) {
            const timer = setTimeout(() => {
                const targetValues = {
                    clients: 300,
                    formations: 500,
                    heures: 5000
                }

                const duration = 2000 // 2 seconds
                const steps = 60
                const stepDuration = duration / steps

                let currentStep = 0

                const interval = setInterval(() => {
                    currentStep++

                    const progress = currentStep / steps
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4) // Smooth easing

                    setCounters({
                        clients: Math.floor(targetValues.clients * easeOutQuart),
                        formations: Math.floor(targetValues.formations * easeOutQuart),
                        heures: Math.floor(targetValues.heures * easeOutQuart)
                    })

                    if (currentStep >= steps) {
                        clearInterval(interval)
                        setHasAnimated(true)
                    }
                }, stepDuration)

                return () => clearInterval(interval)
            }, 500) // Start animation after 500ms

            return () => clearTimeout(timer)
        }
    }, [hasAnimated])
    return (
        <>
            <style jsx global>{`
  :root{
    --primary-color:#307926;   /* green */
    --secondary-color:#183D58; /* navy */
  }

  /* Ensure page content sits above background */
  body, #__next, .page-root { position: relative; z-index: 0; }

  /* Fixed right-side background, behind all content */
  .right-ribbon-bg{
    position: fixed;
    inset: 0 0 0 auto;   /* stick to the right */
    width: min(26vw, 420px);
    height: 100vh;
    z-index: -1;
    pointer-events: none;        /* never block clicks */
    filter: drop-shadow(-10px 0 30px rgba(0,0,0,.15));
  }

  /* Let content breathe on small screens */
  @media (max-width: 992px){
    .right-ribbon-bg{ width: 32vw; }
  }
  @media (max-width: 768px){
    .right-ribbon-bg{ width: 40vw; opacity:.6; } /* subtler on mobile */
  }
  @media (max-width: 520px){
    .right-ribbon-bg{ display:none; } /* hide if it cramps layout */
  }

  /* Optional: reduce animation for accessibility */
  @media (prefers-reduced-motion: reduce){
    .right-ribbon-bg svg *{ animation:none !important; }
  }
`}</style>

            {/* Right-side geometric ribbon (UNDER all components) */}
            <div className="right-ribbon-bg" aria-hidden>
                <svg
                    width="100%" height="100%" viewBox="0 0 300 1000"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"
                >

                    <polygon points="0,0 300,0 240,180 160,220" fill="var(--secondary-color)" />
                    <polygon points="160,220 240,180 190,420 90,500" fill="var(--primary-color)" />
                    <polygon points="90,500 190,420 260,620 200,700" fill="var(--secondary-color)" />
                    <polygon points="200,700 260,620 300,920 130,1000" fill="var(--primary-color)" />
                    <polygon points="190,420 260,620 245,635 175,455" fill="#ffffff" opacity=".06" />
                    <polygon points="240,180 190,420 175,430 225,185" fill="#ffffff" opacity=".06" />
                </svg>
            </div>


            <PagePreloader>
                <Layout headerStyle={1} footerStyle={1}>
                 
                        <div className="container">
                            <div className="section-title mb-20 rmb-35 mt-30">
                                <h2>Nos Formations</h2>
                            </div>
                        </div>



                    {/* Service images Area end */}
                    {/* Service Counter Area start */}
                    <div className="service-counter-area py-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-2s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.clients}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Client</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-4s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.formations}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Formations</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-6s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.heures}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Heures de formation</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service Counter Area end */}
                    {/* Service Details Area start */}
                    <div className="service-details-area pt-100 rpt-70 pb-150 rpb-100">
                        <div className="container">
                            <div className="row gap-50">
                                <div className="col-lg-8">
                                    <div className="service-details-content rmb-65 wow fadeInUp delay-0-2s">

                                        <h3>Formations Professionnelles</h3>
                                        <p className="sub-title">Accompagner vos équipes dans le développement des compétences clés</p>

                                        <div className="formation-cards-area">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="formation-card" style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '20px',
                                                            padding: '30px',
                                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                                            border: '2px solid #f8f9fa',
                                                            transition: 'all 0.3s ease',
                                                            height: '100%',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                            <div className="card-image mb-3">
                                                                <Image
                                                                    src="/assets/images/services/service3.png"
                                                                    alt="Prospection & Vente"
                                                                    width={400}
                                                                    height={250}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        borderRadius: '15px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Prospection & Vente</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Nos formations aident vos collaborateurs à maîtriser les techniques de prospection modernes, identifier les opportunités de marché et transformer efficacement les prospects en clients fidèles.
                                                            </p>
                                                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                                                <button style={{
                                                                    backgroundColor: '#183D58',
                                                                    color: '#ffffff',
                                                                    border: 'none',
                                                                    padding: '12px 25px',
                                                                    borderRadius: '25px',
                                                                    fontSize: '14px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    boxShadow: '0 5px 15px rgba(24, 61, 88, 0.2)'
                                                                }}>
                                                                    En Savoir Plus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="formation-card" style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '20px',
                                                            padding: '30px',
                                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                                            border: '2px solid #f8f9fa',
                                                            transition: 'all 0.3s ease',
                                                            height: '100%',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                            <div className="card-image mb-3">
                                                                <Image
                                                                    src="/assets/images/services/service1.png"
                                                                    alt="Négociation"
                                                                    width={400}
                                                                    height={250}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        borderRadius: '15px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Négociation</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Nous outillons vos équipes avec des méthodes pratiques et des mises en situation réelles afin de négocier avec assurance, obtenir de meilleurs accords et préserver des relations durables.
                                                            </p>
                                                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                                                <button style={{
                                                                    backgroundColor: '#183D58',
                                                                    color: '#ffffff',
                                                                    border: 'none',
                                                                    padding: '12px 25px',
                                                                    borderRadius: '25px',
                                                                    fontSize: '14px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    boxShadow: '0 5px 15px rgba(24, 61, 88, 0.2)'
                                                                }}>
                                                                    En Savoir Plus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="formation-card" style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '20px',
                                                            padding: '30px',
                                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                                            border: '2px solid #f8f9fa',
                                                            transition: 'all 0.3s ease',
                                                            height: '100%',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                            <div className="card-image mb-3">
                                                                <Image
                                                                    src="/assets/images/services/service4.png"
                                                                    alt="Management"
                                                                    width={400}
                                                                    height={250}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        borderRadius: '15px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Management</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Former vos managers à la prise de décision, à la gestion d'équipe et au leadership est essentiel pour renforcer la cohésion, améliorer la productivité et favoriser un environnement de travail positif.
                                                            </p>
                                                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                                                <button style={{
                                                                    backgroundColor: '#183D58',
                                                                    color: '#ffffff',
                                                                    border: 'none',
                                                                    padding: '12px 25px',
                                                                    borderRadius: '25px',
                                                                    fontSize: '14px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    boxShadow: '0 5px 15px rgba(24, 61, 88, 0.2)'
                                                                }}>
                                                                    En Savoir Plus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="formation-card" style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '20px',
                                                            padding: '30px',
                                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                                            border: '2px solid #f8f9fa',
                                                            transition: 'all 0.3s ease',
                                                            height: '100%',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                            <div className="card-image mb-3">
                                                                <Image
                                                                    src="/assets/images/services/service3.png"
                                                                    alt="Communication & Influence"
                                                                    width={400}
                                                                    height={250}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        borderRadius: '15px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Communication & Influence</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Développez l'art de communiquer avec impact, convaincre vos interlocuteurs et renforcer votre influence dans différents contextes professionnels grâce à des techniques éprouvées.
                                                            </p>
                                                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                                                <button style={{
                                                                    backgroundColor: '#183D58',
                                                                    color: '#ffffff',
                                                                    border: 'none',
                                                                    padding: '12px 25px',
                                                                    borderRadius: '25px',
                                                                    fontSize: '14px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    boxShadow: '0 5px 15px rgba(24, 61, 88, 0.2)'
                                                                }}>
                                                                    En Savoir Plus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="formation-card" style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '20px',
                                                            padding: '30px',
                                                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                                            border: '2px solid #f8f9fa',
                                                            transition: 'all 0.3s ease',
                                                            height: '100%',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                            <div className="card-image mb-3">
                                                                <Image
                                                                    src="/assets/images/services/service1.png"
                                                                    alt="Développement personnel"
                                                                    width={400}
                                                                    height={250}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        borderRadius: '15px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Développement personnel</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Nous proposons des programmes axés sur la confiance en soi, la gestion du stress et l'intelligence émotionnelle pour favoriser l'épanouissement personnel et professionnel.
                                                            </p>
                                                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                                                <button style={{
                                                                    backgroundColor: '#183D58',
                                                                    color: '#ffffff',
                                                                    border: 'none',
                                                                    padding: '12px 25px',
                                                                    borderRadius: '25px',
                                                                    fontSize: '14px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s ease',
                                                                    boxShadow: '0 5px 15px rgba(24, 61, 88, 0.2)'
                                                                }}>
                                                                    En Savoir Plus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="service-sidebar">
                                        <div className="widget widget-cta wow fadeInUp delay-0-2s">
                                            <div className="icon" style={{ background: '#183D58' }}><i className="fal fa-phone-volume" style={{ color: '#ffffff' }} /></div>
                                            <h4>Besoin d’une formation<br />sur mesure ?</h4>
                                            <span className="sub-title" style={{
                                                color: '#666666',
                                                fontSize: '14px',
                                                display: 'block',
                                                marginBottom: '15px',
                                                fontWeight: '400'
                                            }}>Appelez-nous à tout moment</span>
                                            <Link href="/contact" className="theme-btn style-two w-100" style={{
                                                backgroundColor: '#ffffff',
                                                color: '#183D58',
                                                border: '2px solid #183D58',
                                                padding: '12px 25px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                display: 'block',
                                                textAlign: 'center',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#FFFFFF';
                                                    e.target.style.color = '#183D58';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#183D58';
                                                    e.target.style.color = '#FFFFFF';
                                                }}>
                                                +336- 5010 - 3659
                                            </Link>
                                        </div>
                                        <h4 className="service-title">Contactez-nous</h4>
                                        <div className="widget widget-form wow fadeInUp delay-0-2s">
                                            <form action="#" className="widget-contact-form">
                                                <input type="text" placeholder="Votre nom" required />
                                                <input type="email" placeholder="Votre email" required />
                                                <input type="email" placeholder="Numéro de téléphone" required />
                                                <textarea name="message" id="message" className="form-control" rows={8} placeholder="Enter Votre Messege" required />
                                                <button className="theme-btn style-two" type="submit">Envoyer</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Contactez-Nous<i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
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
                </Layout>
            </PagePreloader>
        </>
    )
}