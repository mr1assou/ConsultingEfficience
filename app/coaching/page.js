

'use client'
import Accordion3 from "@/components/elements/Accordion3"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
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
        url: '/assets/images/services/service7.png',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/services/service6.png',
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
export default function ServiceDetails() {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const openLightbox = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }
    return (
        <PagePreloader>
            <Layout headerStyle={1} footerStyle={1}>
                <section className="page-banner-area pt-135 rpt-95 pb-110 rpb-70 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/background/banner-bg.png)' }}>
                    <div className="container">
                        <div className="banner-inner text-white wow fadeInUp delay-0-2s">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Coaching</li>
                                </ol>
                            </nav>
                            <h1 className="page-title style-two">Coaching</h1>
                        </div>
                    </div>
                </section>

                <div className="service-images-area">
                    <div className="d-flex">
                        {images.map((image, index) => (
                            // <a onClick={() => openLightbox(index)} key={index}>
                            //     <img src={image.url} alt="Gallery" />
                            // </a>
                            <a onClick={() => openLightbox(index)} key={index} className="image wow fadeInUp delay-0-2s">
                                <Image width={490} height={277} priority src={image.url} alt="Services" />
                            </a>
                        ))}
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]?.url}
                                nextSrc={images[(photoIndex + 1) % images.length].url}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                                onCloseRequest={closeLightbox}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                            // imageTitle={images[photoIndex].title}
                            // imageCaption={images[photoIndex].description}
                            />
                        )}
                        {/* <Link href="/assets/images/services/service-details1.jpg" className="image wow fadeInUp delay-0-2s">
                                <img src="/assets/images/services/service-details1.jpg" alt="Services" />
                            </Link>
                            <Link href="/assets/images/services/service-details2.jpg" className="image wow fadeInUp delay-0-3s">
                                <img src="/assets/images/services/service-details2.jpg" alt="Services" />
                            </Link>
                            <Link href="/assets/images/services/service-details3.jpg" className="image wow fadeInUp delay-0-4s">
                                <img src="/assets/images/services/service-details3.jpg" alt="Services" />
                            </Link> */}
                    </div>
                </div>
                {/* Service images Area end */}
                {/* Service Counter Area start */}
                <div className="service-counter-area py-35">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-2s">
                                    <CounterUp count={300} time={3} plus />
                                    <h6 className="counter-title">Client</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-4s">
                                    <CounterUp count={1000} time={3} Plus />
                                    <h6 className="counter-title">sessions</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-6s">
                                    <CounterUp count={3000} time={3} />
                                    <h6 className="counter-title">heures</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-details-area pt-100 rpt-70 pb-150 rpb-100">
                    <div className="container">
                        <div className="row gap-50">
                            <div className="col-lg-8">
                                <div className="service-details-content rmb-65 wow fadeInUp delay-0-2s">

                                    <h3>COACHING</h3>
                                    <p className="sub-title">Un accompagnement sur mesure pour développer vos talents et votre potentiel</p>

                                    <h4>Leadership 16</h4>
                                    <p>
                                        Un parcours conçu pour renforcer vos capacités de leadership à travers 16 modules pratiques.
                                        L’objectif est de vous donner les outils nécessaires pour inspirer, mobiliser et conduire vos équipes
                                        vers la performance collective.
                                    </p>

                                    <h4>Posture professionnelle</h4>
                                    <p>
                                        Améliorez votre présence, votre confiance et votre impact au quotidien.
                                        Nos coachings personnalisés vous aident à adopter une posture professionnelle alignée avec vos valeurs
                                        et vos ambitions.
                                    </p>

                                    <h4>Croissance personnelle</h4>
                                    <p>
                                        Développez votre potentiel grâce à des séances qui mettent l’accent sur la connaissance de soi,
                                        la gestion des émotions et la mise en place de nouvelles habitudes durables.
                                    </p>

                                    <h4>Mieux-être durable</h4>
                                    <p>
                                        Trouvez un équilibre entre performance et bien-être.
                                        Nos programmes intègrent des techniques de gestion du stress, de résilience et de pleine conscience
                                        pour favoriser un mieux-être durable.
                                    </p>

                                    <h3>Notre approche</h3>
                                    <p className="sub-title">Un accompagnement humain et pragmatique</p>
                                    <p>
                                        Nous combinons écoute active, outils pratiques et mises en situation concrètes pour garantir des
                                        résultats mesurables. Chaque séance est adaptée à vos objectifs personnels et professionnels.
                                    </p>

                                    <h3>Questions Fréquemment Posées</h3>
                                    <p className="sub-title">Tout savoir sur nos coachings</p>
                                    <Accordion3 />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-sidebar">
                                    <div className="widget widget-cta wow fadeInUp delay-0-2s">
                                        <div className="icon"><i className="fal fa-phone-volume" /></div>
                                        <h4>Besoin d’un<br />accompagnement en coaching ?</h4>
                                        <span className="sub-title">Appelez-nous à tout moment</span>
                                        <Link href="/callto:+(2)871382023" className="theme-btn style-two w-100">
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

                <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
                    <div className="container">
                        <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Contactez-Nous<i className="fal fa-arrow-right" /></Link>
                    </div>
                </div>
                {/* Lets Talk Area end */}
                {/* Headline area start */}
                <div className="headline-area bgc-primary py-20">
                    <div className="headline-wrap style-two color-black">
                        <span className="marquee-wrap">
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                            </span>
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                            </span>
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                            </span>
                        </span>
                    </div>
                </div>

            </Layout>
        </PagePreloader>
    )
}