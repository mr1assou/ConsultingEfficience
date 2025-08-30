
import Link from "next/link"
import Image from "next/image"

export default function AboutTwo4() {
    return (
        <>
            <section id="about" className="about-two-area pt-135 pb-85 rpt-100 rpb-50 rel z-1 ">
                <div className="container">
                    <div className="row gap-110 align-items-center">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="about-three-images mb-50">
                                <div className="image">
                                    <Image width={300} height={300} priority src="/assets/images/about/about-three.png" alt="About" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content mb-50">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Efficience Consulting</span>
                                    <h2>POURQUOI NOUS CONFIER
                                        VOS BUDGETS FAF / OPCO ?</h2>
                                </div>
                                <div className="row pt-25">
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-2s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Formations 100% éligibles Qualiopi
                                                </Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Zéro reste à charge inutile
                                                </Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Vos droits utilisés sans expiration
                                                </Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Gain de temps on s

                                                    ’
                                                    occupe de tout
                                                </Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-name-btn">
                                    <Link href="/a_propos" className="theme-btn style-two">Savoir plus sur nous</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-110 align-items-center">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="about-three-images mb-50">

                                <div className="image">
                                    <Image width={300} height={300} priority src="/assets/images/about/experience-corner.png" alt="About" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content mb-50">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Efficience Consulting</span>
                                    <h2>NOTRE ACCOMPAGNEMENT</h2>
                                </div>
                                <div className="row pt-25">
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-2s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Diagnostic gratuit
                                                </Link></h6>
                                                <p>Étude de vos besoins et de vos enjeux
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Financements
                                                </Link></h6>
                                                <p>Mobilisation des dispositifs (FAF/OPCO)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Montage de dossier
                                                </Link></h6>
                                                <p>Gestion des démarches administratives
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Suivi et reporting</Link></h6>
                                                <p>Un interlocuteur unique pour votre dossier
                                                </p>
                                            </div>
                                            <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-name-btn">
                                    <Link href="/a_propos" className="theme-btn style-two">Savoir plus sur nous</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row gap-110 align-items-center">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="about-three-images mb-50">

                                <div className="image">
                                    <Image width={300} height={300} priority src="/assets/images/about/sn.png" alt="About" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content mb-50">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Efficience Consulting</span>
                                    <h2>CE QUE VOUS Y GAGNEZ :</h2>
                                </div>
                                <div className="row pt-25">
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-2s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Former plus, sans dépenser plus :</Link></h6>
                                                <p>Vos budgets FAF/OPCO sont entièrement mobilisés
                                                    pour financer vos besoins.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Une trésorerie protégée :
                                                </Link></h6>
                                                <p>Vous transformez vos cotisations obligatoires en
                                                    investissement rentable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Des équipes qui montent en compétence :
                                                </Link></h6>
                                                <p>Plus efficaces, plus motivées, et directement
                                                    opérationnelles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ visibility: 'hidden' }}>
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">Des équipes qui montent en compétence :
                                                </Link></h6>
                                                <p>Plus efficaces, plus motivées, et directement
                                                    opérationnelles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-name-btn">
                                    <Link href="/a_propos" className="theme-btn style-two">Savoir plus sur nous</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
