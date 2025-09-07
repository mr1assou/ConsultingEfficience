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
                            <div className="row justify-content-between align-items-stretch g-5" style={{ minHeight: '400px' }}>
                                <div className="col-lg-6">
                                    <div className="about-image-wrapper wow fadeInLeft delay-0-2s" style={{
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        height: '100%'
                                    }}>
                                        <Image 
                                            src="/assets/images/hero/eng.png" 
                                            alt="Formation responsable et développement durable" 
                                            width={700} 
                                            height={380} 
                                            priority
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about-content wow fadeInRight delay-0-2s" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="section-title mb-30" style={{ flex: 1 }}>
                                            <h2 style={{
                                                display: 'block',
                                                fontSize: 'clamp(24px, 4vw, 32px)',
                                                fontWeight: '900',
                                                color: '#307926',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                marginBottom: '25px',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                                lineHeight: '1.2'
                                            }}>
                                                Notre approche de formation responsable
                                            </h2>
                                            <h5 style={{
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#183D58',
                                                fontWeight: '500',
                                                textAlign: 'justify'
                                            }}>
                                                Nous sommes convaincus que la formation est une <strong>ressource essentielle</strong> pour développer notre capital humain et accompagner les évolutions de nos écosystèmes.
                                            </h5>
                                            
                                            <div style={{ marginTop: '25px' }}>
                                                <h5 style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                    lineHeight: '1.8',
                                                    color: '#183D58',
                                                    fontWeight: '500',
                                                    textAlign: 'justify'
                                                }}>
                                                    En tant qu'outil stratégique pour l'entreprise, la formation joue un rôle clé dans l'amélioration des performances individuelles et organisationnelles. Elle permet de maintenir un niveau de performance sur le marché en offrant aux employés les moyens de renforcer leur professionnalisme, de valider leurs connaissances et leurs compétences.
                                                </h5>
                                                
                                                <div style={{
                                                    marginTop: '25px',
                                                    padding: '20px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '12px',
                                                    borderLeft: '4px solid #307926'
                                                }}>
                                                    <h5 style={{
                                                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '600',
                                                        margin: 0,
                                                        fontStyle: 'italic'
                                                    }}>
                                                        Nous nous engageons collectivement pour un avenir plus inclusif et durable <i className="fas fa-asterisk" style={{ color: '#307926', marginLeft: '8px' }} />
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <Testimonials3 />
                    
                    <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between align-items-stretch" style={{ minHeight: '400px' }}>
                                <div className="col-lg-5">
                                    <div className="about-content wow fadeInRight delay-0-2s" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="section-title mb-30" style={{ flex: 1 }}>
                                            <h2 style={{
                                                display: 'block',
                                                fontSize: 'clamp(24px, 4vw, 32px)',
                                                fontWeight: '900',
                                                color: '#307926',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                marginBottom: '25px',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                                lineHeight: '1.2'
                                            }}>
                                                Un cadre confidentiel et sécurisé
                                            </h2>
                                            <h5 style={{
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#183D58',
                                                fontWeight: '500',
                                                marginBottom: '25px'
                                            }}>
                                                Nos engagements concrets :
                                            </h5>
                                            
                                            <div className="commitments-list" style={{ marginTop: '20px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '20px',
                                                    padding: '15px',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    borderLeft: '3px solid #183D58'
                                                }}>
                                                    
                                                    <p style={{
                                                        margin: 0,
                                                        fontSize: '16px',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '500'
                                                    }}>
                                                        Toutes les données collectées sont traitées avec <strong>confidentialité et sécurité</strong>
                                                    </p>
                                                </div>
                                                
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '20px',
                                                    padding: '15px',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    borderLeft: '3px solid #183D58'
                                                }}>
                                                    
                                                    <p style={{
                                                        margin: 0,
                                                        fontSize: '16px',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '500'
                                                    }}>
                                                        Les discussions menées lors des formations, accompagnements ou coachings ne sont <strong>jamais divulguées</strong> sans accord préalable
                                                    </p>
                                                </div>
                                                
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '20px',
                                                    padding: '15px',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    borderLeft: '3px solid #183D58'
                                                }}>
                                                   
                                                    <p style={{
                                                        margin: 0,
                                                        fontSize: '16px',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '500'
                                                    }}>
                                                        Aucun contenu, tant personnel que professionnel, n'est utilisé à d'autres fins que celles spécifiquement prévues dans la convention
                                                    </p>
                                                </div>
                                                
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '20px',
                                                    padding: '15px',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    borderLeft: '3px solid #183D58'
                                                }}>
                                                    
                                                    <p style={{
                                                        margin: 0,
                                                        fontSize: '16px',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '500'
                                                    }}>
                                                        Les interventions au sein de l'entreprise respectent les dynamiques internes et les sensibilités de chaque organisation <i className="fas fa-asterisk" style={{ color: '#307926', marginLeft: '8px' }} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-image-wrapper wow fadeInLeft delay-0-2s" style={{
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        height: '100%'
                                    }}>
                                        <Image 
                                            width={700} 
                                            height={380} 
                                            priority 
                                            src="/assets/images/hero/eng2.png" 
                                            alt="Confidentialité et sécurité" 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="about" className="about-area bgc-black py-40 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between align-items-stretch g-5" style={{ minHeight: '400px' }}>
                                <div className="col-lg-6">
                                    <div className="about-image-wrapper wow fadeInLeft delay-0-2s" style={{
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        height: '100%'
                                    }}>
                                        <Image 
                                            width={700} 
                                            height={380} 
                                            priority 
                                            src="/assets/images/hero/eng3.png" 
                                            alt="Accessibilité et handicap" 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about-content wow fadeInRight delay-0-2s" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="section-title mb-30" style={{ flex: 1 }}>
                                            <h2 style={{
                                                display: 'block',
                                                fontSize: 'clamp(24px, 4vw, 32px)',
                                                fontWeight: '900',
                                                color: '#307926',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                marginBottom: '25px',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                                lineHeight: '1.2'
                                            }}>
                                                Accessibilité & Handicap
                                            </h2>
                                            <h5 style={{
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#183D58',
                                                fontWeight: '500',
                                                marginBottom: '25px'
                                            }}>
                                                Nous nous engageons à rendre nos formations <strong>accessibles à tous</strong>, y compris aux personnes en situation de handicap.
                                            </h5>
                                            
                                            <div style={{ marginTop: '20px' }}>
                                                <div style={{
                                                    padding: '20px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '12px',
                                                    borderLeft: '4px solid #307926',
                                                    marginBottom: '25px'
                                                }}>
                                                    <h5 style={{
                                                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                        lineHeight: '1.6',
                                                        color: '#183D58',
                                                        fontWeight: '500',
                                                        margin: 0
                                                    }}>
                                                        Nous ajustons nos approches pédagogiques, organisationnelles et techniques en fonction des besoins individuels.
                                                    </h5>
                                                </div>
                                                
                                                <h5 style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                    lineHeight: '1.8',
                                                    color: '#183D58',
                                                    fontWeight: '500',
                                                    marginBottom: '25px'
                                                }}>
                                                    Pour vous garantir un accompagnement personnalisé, nous vous invitons à nous faire part à l'avance de toute situation nécessitant un aménagement spécifique.
                                                </h5>
                                                
                                                <div style={{
                                                    padding: '25px',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '15px',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                    border: '2px solid #e9ecef',
                                                    textAlign: 'center'
                                                }}>
                                                    <h6 style={{
                                                        fontSize: '18px',
                                                        fontWeight: '600',
                                                        color: '#183D58',
                                                        marginBottom: '15px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    }}>
                                                        Référent handicap
                                                    </h6>
                                                    <p style={{
                                                        fontSize: '20px',
                                                        fontWeight: '700',
                                                        color: '#307926',
                                                        margin: '0 0 10px 0'
                                                    }}>
                                                        Ryad Mimeche
                                                    </p>
                                                    <p style={{
                                                        fontSize: '16px',
                                                        color: '#183D58',
                                                        margin: '0 0 15px 0'
                                                    }}>
                                                        Contact : <a href="mailto:rmimeche@efficienceconsulting.fr" style={{ color: '#307926', textDecoration: 'none', fontWeight: '600' }}>rmimeche@efficienceconsulting.fr</a>
                                                    </p>
                                                    <div style={{
                                                        fontSize: '14px',
                                                        color: '#666',
                                                        fontStyle: 'italic'
                                                    }}>
                                                        Chaque demande est traitée de manière confidentielle et attentive <i className="fas fa-asterisk" style={{ color: '#307926', marginLeft: '8px' }} />
                                                    </div>
                                                </div>
                                            </div>
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
                                    width="100%" height="100%" viewBox="0 0 1920 300"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="0,300 0,100 960,300" fill="var(--secondary-color)" />
                
                                    <polygon points="1920,300 1920,100 960,300" fill="var(--secondary-color)" />
                
                                    <polygon points="480,300 960,100 1440,300" fill="var(--primary-color)" />
                                </div> */}
        </>
    )
}