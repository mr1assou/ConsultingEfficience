
import VideoPopup from "../elements/VideoPopup"
import Link from "next/link"
import Image from "next/image"

export default function Hero1() {
    return (
        <>
            <section className="hero-area py-100 rel z-1">
                <div className="container container-1530">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="hero-content-part rmb-55">
                                <h1 className="wow fadeInUp delay-0-2s">Consulting<i className="fas fa-star-of-life" /></h1>
                                <div className="hero-sub-heading wow fadeInUp delay-0-4s">
                                    <VideoPopup style={1} />
                                    <span className="agency-text">Agence</span>
                                </div>
                                <div className="text wow fadeInUp delay-0-6s">
                                    Accompagnements premium sur mesure
                                    Pour cadres, dirigeants et talents à haut potentiel, en France et au Benelux.
                                    Alliez excellence commerciale et développement personnel pour transformer vos ambitions en réussites durables.  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image-part">
                                <div className="hero-main-img wow fadeInRight delay-0-2s">
                                    <Image src="/assets/images/hero/hero-main.png" alt="Hero" width={700} height={380} priority/>
                                    {/* <VideoPopup  style={1}/> */}
                                </div>
                                <div className="mail-us wow fadeInRight delay-0-4s">
                                    <i className="far fa-at" />
                                    <Link href="/contact">Contactez-Nous</Link>
                               </div>
                                <div className="hero-small-img wow fadeInDown delay-0-6s">
                                    <Image src="/assets/images/hero/hero-small.png" alt="Hero" width={350} height={150} priority/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape">
                    <img src="/assets/images/hero/hero-shape.png" alt="Shape" />
                </div>
            </section>
        </>
    )
}
