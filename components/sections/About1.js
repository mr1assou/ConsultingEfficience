
import Image from "next/image"

export default function About1() {
    return (
        <>
            <section className="about-area bgc-black py-145 rpy-100 rel z-1" style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row align-items-start g-8">
                        {/* Text */}
                        <div className="col-lg-6">
                            <div className="about-content hover-box-wrap rmb-55 wow fadeInRight delay-0-2s">
                                <div className="section-title">
                                    <span className="sub-title mb-15" style={{color: '#183D58', fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>À propos</span>
                                    <h3 style={{
                                        fontSize: 'clamp(32px, 4vw, 42px)',
                                        fontWeight: '800',
                                        color: '#183D58',
                                        marginBottom: '30px',
                                        lineHeight: '1.2',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                        textAlign: 'left'
                                    }}>
                                        Révéler les talents. Transformer les ambitions
                                    </h3>

                                    <div style={{ marginBottom: '25px' }}>
                                        <p style={{
                                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                                            lineHeight: '1.8',
                                            color: '#183D58',
                                            fontWeight: '500',
                                            marginBottom: '20px'
                                        }}>
                                            Chez Efficience Consulting, nous croyons que chaque individu possède un <strong>potentiel unique</strong>, souvent inexploité.
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: '25px' }}>
                                        <p style={{
                                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                                            lineHeight: '1.8',
                                            color: '#183D58',
                                            fontWeight: '500',
                                            marginBottom: '20px'
                                        }}>
                                            Notre mission : le faire émerger, l'amplifier et le mettre en mouvement.
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: '25px' }}>
                                        <p style={{
                                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                                            lineHeight: '1.8',
                                            color: '#183D58',
                                            fontWeight: '500',
                                            marginBottom: '20px'
                                        }}>
                                            Fondé par <strong>Ryad Mimeche</strong>, ancien sportif de haut niveau et passionné par la performance humaine, notre organisme de formation s'appuie sur plus de <strong>12 ans d'expertise</strong> pour accompagner les organisations et les individus vers une transformation durable et authentique.
                                        </p>
                                    </div>

                                    <div style={{
                                        padding: '25px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '15px',
                                        borderLeft: '4px solid #307926',
                                        marginTop: '30px'
                                    }}>
                                        <p style={{
                                            fontSize: 'clamp(18px, 3vw, 20px)',
                                            lineHeight: '1.6',
                                            color: '#183D58',
                                            fontWeight: '700',
                                            margin: 0,
                                            textAlign: 'center',
                                            fontStyle: 'italic'
                                        }}>
                                            Ensemble, donnons à vos talents les moyens de se dépasser !
                                        </p>
                                    </div>
                                </div>
                               
            
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6">
                            <div className="wow fadeInLeft delay-0-2s">
                                <Image
                                    src="/assets/images/hero/ryad.jpg"
                                    alt="Ryad Mimeche - Efficience Consulting"
                                    className="img-fluid custom-img"
                                    width={400}
                                    height={600}
                                    priority
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
