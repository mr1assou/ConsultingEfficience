
import Image from "next/image"

export default function About1() {
    return (
        <>
            <section className="about-area bgc-black py-145 rpy-100 rel z-1" style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row align-items-start g-5">
                        {/* Text */}
                        <div className="col-lg-6">
                            <div className="about-content hover-box-wrap rmb-55 wow fadeInRight delay-0-2s">
                                <div className="section-title">
                                    <span className="sub-title mb-15" style={{ color: '#183D58', fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>À propos</span>
                                    <h3 style={{ fontSize: '42px', fontWeight: '800', color: '#183D58', marginBottom: '25px', lineHeight: '1.2', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Révéler les talents. Transformer les ambitions</h3>
                                    <p>
                                        Chez Efficience Consulting, nous révélons le potentiel unique de chaque individu.
                                        Notre mission : le faire émerger, l’amplifier et le mettre en mouvement.
                                        Fondé par Ryad Mimeche, ancien sportif de haut niveau et passionné par la performance humaine, notre organisme de formation
                                        s’appuie sur plus de 12 ans d’expertise pour accompagner les organisations et les individus vers une transformation durable et authentique.
                                    </p>
                                </div>
                                {/* <div className="section-title">
                                    <h3 style={{fontSize: '42px', fontWeight: '800', color: '#183D58', marginBottom: '25px', lineHeight: '1.2', textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>Des Solutions Concrètes pour des Résultats Mesurables</h3>
                                    <p>
                                        Nous accompagnons les organisations dans la mise en place d’actions concrètes qui produisent un impact visible sur le terrain. Grâce à des outils pratiques et des méthodologies structurées, nous aidons les équipes à relever leurs défis quotidiens,
                                        optimiser leurs processus et atteindre leurs objectifs stratégiques.
                                        Chaque intervention est pensée pour générer des résultats mesurables,
                                        qu’il s’agisse d’améliorer la communication interne,
                                        de renforcer la prise de décision ou de stimuler l’innovation au sein des projets.
                                    </p>
                                </div> */}

                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6">
                            <div
                                className="wow fadeInLeft delay-0-2s"
                                style={{
                                    height: "500px",              // fixed height
                                    width: "100%",                // full width
                                    borderRadius: "20px",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                    backgroundImage: "url('/assets/images/hero/ryad.jpg')",
                                    backgroundSize: "cover",      // 👈 this makes it behave like background cover
                                    backgroundPosition: "center", // centers the image
                                    backgroundRepeat: "no-repeat"
                                }}
                            ></div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
