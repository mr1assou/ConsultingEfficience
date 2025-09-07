import Link from "next/link"

export default function Footer1() {
    return (
        <>
            
            <footer className="main-footer footer-one pt-70 pb-20 bgc-black bordered-top rel z-10">
                
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-about wow fadeInUp delay-0-2s">
                                <div className="footer-logo mb-15">
                                    <Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-3s">
                               
                                <ul>
                                    <li><Link href="/">Acceuil</Link></li>
                                    {/* <li><Link href="/a_propos">À propos</Link></li> */}
                                    <li><Link href="/formation">Formation</Link></li>
                                    <li><Link href="/coaching">Coaching</Link></li>
                                    <li><Link href="/expertise_financiere">Expertise financière</Link></li>
                                    <li><Link href="/actualite">Actualités</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-4s">
                                <ul>
                                    <li><Link href="/engagement">Nos Engagements</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-text wow fadeInUp delay-0-5s">
                                <div className="text">
                                    <p>France - Benelux</p>
                                    <Link href="/contact">Contactez-Nous</Link><br />
                                    <Link href="/contact">+33 6 50 10 36 59</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        
        </>
    )
}
