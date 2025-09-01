"use client"
import Testimonials3 from "@/components/sections/Testimonials3"
import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function Portfolio() {

    return (
        <>
            

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Engagements">
                <div>
                    <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between g-5">
                                <div className="col-lg-5">
                                    <Image src="/assets/images/hero/eng.png" alt="Hero" width={900} height={380} priority />
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content wow fadeInRight delay-0-2s">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-15">​Notre approche de formation responsable

                                            </span>
                                            <h5>Nous sommes convaincus que la formation est une ressource essentielle pour développer notre capital humain et accompagner les évolutions de nos écosystèmes.

                                                En tant qu'outil stratégique pour l'entreprise, la formation joue un rôle clé dans l'amélioration des performances individuelles et organisationnelles. Elle permet de maintenir un niveau de performance sur le marché en offrant aux employés les moyens de renforcer leur professionnalisme, de valider leurs connaissances et leurs compétences. Nous nous engageons collectivement pour un avenir plus inclusif et durable. <i className="fas fa-asterisk" /></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Testimonials3 />
                    <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-6 ">
                                    <div className="about-content wow fadeInRight delay-0-2s">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-15">   Un cadre confidentiel et sécurisé
                                            </span>
                                            <h5>Nos engagements concrets :

                                                Toutes les données collectées sont traitées avec confidentialité et sécurité
                                                Les discussions menées lors des formations, accompagnements ou coachings ne sont jamais divulguées sans accord préalable
                                                Aucun contenu, tant personnel que professionnel, n'est utilisé à d'autres fins que celles spécifiquement prévues dans la convention
                                                Les interventions au sein de l'entreprise respectent les dynamiques internes et les sensibilités de chaque organisation <i className="fas fa-asterisk" /></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <Image width={700} height={380} priority src="/assets/images/hero/eng2.png" alt="Hero" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about-area bgc-black py-40 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between g-5">
                                <div className="col-lg-5">
                                    <Image width={700} height={380} priority src="/assets/images/hero/eng3.png" alt="Hero" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content wow fadeInRight delay-0-2s">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-15">  Accessibilité & Handicap
                                            </span>
                                            <h5>Nous nous engageons à rendre ses formations accessibles à tous, y compris aux personnes en situation de handicap.

                                                Nous ajustons nos approches pédagogiques, organisationnelles et techniques en fonction des besoins individuels.
                                                Pour vous garantir un accompagnement personnalisé, nous vous invitons à nous faire part à l'avance de toute situation nécessitant un aménagement spécifique.

                                                Référent handicap : Ryad Mimeche
                                                Contact :  rmimeche@efficienceconsulting.fr

                                                Chaque demande est traitée de manière confidentielle et attentive.<i className="fas fa-asterisk" /></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>

            </Layout>
                <style jsx global>{`
                  .bottom-ribbon-bg {
                   
                    inset: auto 0 0 0; /* stick to bottom */
                    width: 100%;
                    height: 200px;      /* adjust height as you like */
                    z-index: 100;
                    pointer-events: none;
                  }
                `}</style>
                
                            {/* Bottom background pattern */}
                            {/* <div className="bottom-ribbon-bg" aria-hidden>
                                <svg
                                    width="100%" height="100%"
                                    viewBox="0 0 1920 300"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="0,300 0,100 960,300" fill="var(--secondary-color)" />
                
                                    <polygon points="1920,300 1920,100 960,300" fill="var(--secondary-color)" />
                
                                    <polygon points="480,300 960,100 1440,300" fill="var(--primary-color)" />
                                </svg>
                            </div> */}
        </>
    )
}