
'use client'
import Link from "next/link"
import { useState } from "react"
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'

const images = [
    {
        id: 1,
        url: '/assets/images/footer/gallery1.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/footer/gallery2.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/assets/images/footer/gallery3.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 4,
        url: '/assets/images/footer/gallery4.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 5,
        url: '/assets/images/footer/gallery5.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 6,
        url: '/assets/images/footer/gallery6.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    }
]

export default function Footer2() {
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
        <>
            <footer className="main-footer pt-130 rpt-100 footer-two rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-5 col-sm-8">
                            <div className="footer-widget widget-about wow fadeInUp delay-0-2s">
                                <div className="footer-logo mb-15">
                                    <Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" /></Link>
                                </div>
                                <p>The world’s first and largest digital market for crypto collectibles and non-fungible</p>
                                <ul className="list-style-one">
                                    <li><i className="fas fa-envelope-open" /> <Link href="mailto:Info@webmail.com">Info@webmail.com</Link></li>
                                    <li><i className="fas fa-phone" /> <Link href="/callto:6845550102490">684 555-0102 490</Link></li>
                                    <li><i className="fas fa-map-marked-alt" /> 6391 Elgin St. Celina, NYC 10299</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-3s">
                                <h5 className="footer-title">Services Req</h5>
                                <ul>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/faqs">Faq</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/blog-v2">Blog Insights</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-gallery wow fadeInUp delay-0-4s">
                                <h5 className="footer-title">Gallery</h5>
                                <div className="gallery">
                                    {images.map((image, index) => (
                                        <a onClick={() => openLightbox(index)} key={index}>
                                            <img src={image.url} alt="Gallery" />
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
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-sm-6">
                            <div className="footer-widget widget-newsletter wow fadeInUp delay-0-5s">
                                <h5 className="footer-title">newsletter</h5>
                                <form action="#">
                                    <div className="newsletter-form mb-20">
                                        <input type="email" placeholder="Enter Email Adress" required />
                                        <button type="submit"><i className="far fa-chevron-double-right" /></button>
                                    </div>
                                    <label className="condition" htmlFor="condition"><input id="condition" type="checkbox" required /> I agree to all your terms and policies</label>
                                </form>
                                <div className="social mt-10">
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="copyright-text text-center mt-40 rmt-20 py-25">
                                <span>© {new Date().getFullYear()}</span> <Link href="/">Webtend</Link> . All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
