import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer className="main-footer pt-110 rpt-90 footer-two rel z-1">
                <div className="container">
                    <div className="footer-lets-talk pb-80 rpb-35"><span className="text mb-20">Let’s join forces to create <span>something</span> extraordinary </span><Link href="/contact" className="details-btn mb-20"><i className="fal fa-arrow-right" /></Link></div>
                </div>
                <div className="container">
                    <div className="row pb-50 rpb-25 align-items-center justify-content-between">
                        <div className="col-lg-4">
                            <div className="footer-logo mb-15">
                                <Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 text-lg-end">
                            <ul className="footer-menu mb-15">
                                <li><Link href="/">home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/blog">news</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pb-25 align-items-center justify-content-between">
                        <div className="col-lg-7">
                            <div className="footer-text mb-25">
                                These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here.
                            </div>
                        </div>
                        <div className="col-lg-5 text-lg-end">
                            <div className="footer-social mb-25">
                                <span>Follow Us:</span>
                                <div className="social-style-one">
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
