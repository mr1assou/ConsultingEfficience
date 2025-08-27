
import Link from "next/link"

export default function Team1() {
    return (
        <>
            <section className="team-area overflow-hidden pt-140 rpt-50 pb-120 rpb-70 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                                <h5 className="sub-title mb-15">Directeur de l'équipe de l'entreprise</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-1450">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img src="/assets/images/team/team1.png" alt="Team" />
                                </div>
                                <div className="content">
                                    <span className="designation">directeur créatif</span>
                                    <h6>RYAD MIMECHE</h6>
                                    <div className="social-style-two">
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="team-shapes">
                    <div className="shape one">
                        <img src="/assets/images/shapes/circle.png" alt="Circle" />
                    </div>
                    <div className="shape two">
                        <img src="/assets/images/shapes/box.png" alt="Box" />
                    </div>
                </div>
            </section>
        </>
    )
}
