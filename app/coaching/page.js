

'use client'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState, useEffect } from "react"
import 'react-18-image-lightbox/style.css'
import PagePreloader from "@/components/elements/PagePreloader"
import Image from "next/image"

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const images = [
    {
        id: 1,
        url: '/assets/images/services/service6.png',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/services/service7.png',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/assets/images/services/service8.png',
        title: 'Image 3',
        description: 'This is the third image',
    }
]

export default function Coaching() {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [counters, setCounters] = useState({
        clients: 0,
        sessions: 0,
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
                    clients: 150,
                    sessions: 800,
                    heures: 2500
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
                        sessions: Math.floor(targetValues.sessions * easeOutQuart),
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

            <style jsx global>{`
                .coaching-card {
                    transition: all 0.3s ease !important;
                }
                .coaching-card:hover {
                    transform: translateY(-10px) !important;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.15) !important;
                }
            `}</style>
            <PagePreloader>
                <Layout headerStyle={1} footerStyle={1}>
                        <div className="container">
                            <div className="section-title mb-20 rmb-35 mt-25">
                                <h2>Coaching Personnel</h2>
                            </div>
                        </div>

                    {/* Service Counter Area start */}
                    <div className="service-counter-area py-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-2s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.clients}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Clients Coachés</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-4s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.sessions}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Sessions de Coaching</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-6s" style={{ backgroundColor: 'transparent', border: '2px solid #e9ecef', borderRadius: '15px', padding: '30px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#183D58', display: 'block', marginBottom: '10px' }}>{counters.heures}+</span>
                                        <h6 className="counter-title" style={{ color: '#333', fontSize: '16px', fontWeight: '600', marginTop: '15px' }}>Heures d'Accompagnement</h6>
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

                                        <h3>Services de Coaching</h3>
                                        <p className="sub-title">Accompagner votre développement personnel et professionnel vers l'excellence</p>

                                        <div className="coaching-cards-area">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 mb-4">
                                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                                        <div className="coaching-card" style={{
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
                                                                    alt={images[0].title}
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
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Coaching en Leadership</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Développez vos compétences de leader, améliorez votre communication d'équipe et renforcez votre impact managérial pour inspirer et motiver vos collaborateurs.
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
                                                        <div className="coaching-card" style={{
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
                                                                    src={images[1].url}
                                                                    alt={images[1].title}
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
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Confiance en Soi</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Renforcez votre estime de soi, surmontez vos doutes et développez une confiance inébranlable pour atteindre vos objectifs personnels et professionnels.
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
                                                        <div className="coaching-card" style={{
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
                                                                    src={images[2].url}
                                                                    alt={images[2].title}
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
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Gestion du Stress</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Apprenez à gérer efficacement votre stress, développez votre résilience et maintenez un équilibre optimal entre vie professionnelle et personnelle.
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
                                                        <div className="coaching-card" style={{
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
                                                                    src={images[0].url}
                                                                    alt={images[0].title}
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
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Communication Efficace</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Maîtrisez l'art de la communication, améliorez votre écoute active et développez votre capacité à convaincre et influencer positivement.
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
                                                        <div className="coaching-card" style={{
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
                                                                    src={images[1].url}
                                                                    alt={images[1].title}
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
                                                            <h4 style={{ color: '#183D58', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Développement Personnel</h4>
                                                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', flex: '1' }}>
                                                                Découvrez votre potentiel, définissez vos objectifs de vie et créez un plan d'action concret pour réaliser vos rêves et aspirations.
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
                                            <h4>Besoin d'un coaching<br />personnalisé ?</h4>
                                            <span className="sub-title" style={{
                                                color: '#666666',
                                                fontSize: '14px',
                                                display: 'block',
                                                marginBottom: '15px',
                                                fontWeight: '400'
                                            }}>Contactez-nous pour un accompagnement sur mesure</span>
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
            </PagePreloader>
        </>
    )
}