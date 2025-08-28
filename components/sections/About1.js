
import Image from "next/image"

export default function About1() {
    return (
        <>
            <section className="about-area bgc-black py-145 rpy-100 rel z-1">
                <div className="container">
                    <div className="row align-items-start g-5">
                        {/* Text */}
                        <div className="col-lg-6">
                            <div className="about-content hover-box-wrap rmb-55 wow fadeInRight delay-0-2s">
                                <div className="section-title">
                                    <span className="sub-title mb-15">À propos</span>
                                    <h3>Révéler les talents. Transformer les ambitions</h3>
                                    <p>
                                        Chez Efficience Consulting, nous croyons que chaque individu possède un potentiel unique, souvent inexploité.
                                        Notre mission : le faire émerger, l’amplifier et le mettre en mouvement.
                                        Fondé par Ryad Mimeche, ancien sportif de haut niveau et passionné par la performance humaine, notre organisme de formation
                                        s’appuie sur plus de 12 ans d’expertise pour accompagner les organisations et les individus vers une transformation durable et authentique.
                                    </p>
                                </div>
                                <div className="section-title">
                                    <h3>Des Solutions Concrètes pour des Résultats Mesurables</h3>
                                    <p>
                                        Nous accompagnons les organisations dans la mise en place d’actions concrètes qui produisent un impact visible sur le terrain. Grâce à des outils pratiques et des méthodologies structurées, nous aidons les équipes à relever leurs défis quotidiens,
                                        optimiser leurs processus et atteindre leurs objectifs stratégiques.
                                        Chaque intervention est pensée pour générer des résultats mesurables,
                                        qu’il s’agisse d’améliorer la communication interne,
                                        de renforcer la prise de décision ou de stimuler l’innovation au sein des projets.
                                    </p>
                                </div>
                                <div className="hover-box">
                                    <span>nous faisons</span>
                                    <i className="fal fa-arrow-down" />
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6">
                            <div className="wow fadeInLeft delay-0-2s">
                                <Image
                                    src="/assets/images/hero/ryad.jpg"
                                    alt="Client Logo"
                                    className="img-fluid custom-img"
                                    width={400}
                                    height={600}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
