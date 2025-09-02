"use client"

import Link from "next/link"
import Image from "next/image"

export default function ServicesThree2() {
  return (
    <>
      <section
        className="services-area-three py-80 rpy-60 rel z-1"
        style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          zIndex: 0
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#183D58" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15" style={{
                  display: 'inline-block',
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  fontWeight: '600',
                  color: '#307926',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '20px',
                  position: 'relative'
                }}>
                  Service de consulting de confiance
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#307926',
                    borderRadius: '2px'
                  }}></span>
                </span>
                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: '800',
                  color: '#183D58',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Services consulting que vous obtenez
                </h2>
                <p style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  lineHeight: '1.6',
                  color: '#183D58',
                  fontWeight: '500',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Efficience Consulting offre un service de confiance structuré en deux volets : formation et coaching. 
                  Développez vos compétences et atteignez vos objectifs professionnels.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center g-4 g-lg-5">
            
            {/* CARD: Formation */}
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <Link href="/formation" className="service-card wow fadeInUp delay-0-2s" style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                height: '100%'
              }}>
                <div className="card-wrapper" style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}>
                  {/* Image Container */}
                  <div className="image-container" style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '280px',
                    background: 'linear-gradient(135deg, #307926 0%, #183D58 100%)'
                  }}>
                    <Image 
                      src="/assets/images/services/service1.png" 
                      width={400} 
                      height={280} 
                      priority 
                      alt="Formation professionnelle" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    <div className="overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(48, 121, 38, 0.8) 0%, rgba(24, 61, 88, 0.8) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="icon" style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'scale(0.8)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <i className="fas fa-graduation-cap" style={{
                          fontSize: '24px',
                          color: '#307926'
                        }}></i>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="content" style={{
                    padding: '30px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="service-header" style={{
                      marginBottom: '20px'
                    }}>
                      <h3 style={{
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        fontWeight: '700',
                        color: '#183D58',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>
                        Formation
                      </h3>
                      <div className="accent-line" style={{
                        width: '50px',
                        height: '3px',
                        backgroundColor: '#307926',
                        borderRadius: '2px'
                      }}></div>
                    </div>

                    <p style={{
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: '1.6',
                      color: '#6c757d',
                      marginBottom: '25px',
                      flex: 1
                    }}>
                      Nous offrons des programmes sur mesure, interactifs et adaptés pour développer les compétences clés 
                      et optimiser la performance professionnelle de vos équipes.
                    </p>

                    <div className="cta-button" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '15px 20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#183D58'
                      }}>
                        Découvrir nos formations
                      </span>
                      <i className="fal fa-long-arrow-right" style={{
                        fontSize: '16px',
                        color: '#307926',
                        transition: 'transform 0.3s ease'
                      }}></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* CARD: Coaching */}
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <Link href="/coaching" className="service-card wow fadeInUp delay-0-3s" style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                height: '100%'
              }}>
                <div className="card-wrapper" style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}>
                  {/* Image Container */}
                  <div className="image-container" style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '280px',
                    background: 'linear-gradient(135deg, #183D58 0%, #307926 100%)'
                  }}>
                    <Image 
                      src="/assets/images/services/service6.png" 
                      width={400} 
                      height={280} 
                      priority 
                      alt="Coaching professionnel" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    <div className="overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(24, 61, 88, 0.8) 0%, rgba(48, 121, 38, 0.8) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="icon" style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'scale(0.8)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <i className="fas fa-user-tie" style={{
                          fontSize: '24px',
                          color: '#183D58'
                        }}></i>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="content" style={{
                    padding: '30px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="service-header" style={{
                      marginBottom: '20px'
                    }}>
                      <h3 style={{
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        fontWeight: '700',
                        color: '#183D58',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>
                        Coaching
                      </h3>
                      <div className="accent-line" style={{
                        width: '50px',
                        height: '3px',
                        backgroundColor: '#183D58',
                        borderRadius: '2px'
                      }}></div>
                    </div>

                    <p style={{
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: '1.6',
                      color: '#6c757d',
                      marginBottom: '25px',
                      flex: 1
                    }}>
                      Nous proposons un coaching personnalisé, axé sur le développement des compétences, le renforcement 
                      du leadership et l'accompagnement vers l'atteinte des objectifs professionnels.
                    </p>

                    <div className="cta-button" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '15px 20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#183D58'
                      }}>
                        Découvrir notre coaching
                      </span>
                      <i className="fal fa-long-arrow-right" style={{
                        fontSize: '16px',
                        color: '#183D58',
                        transition: 'transform 0.3s ease'
                      }}></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .service-card:hover .card-wrapper {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          
          .service-card:hover .image-container img {
            transform: scale(1.05);
          }
          
          .service-card:hover .overlay {
            opacity: 1;
          }
          
          .service-card:hover .overlay .icon {
            transform: scale(1);
          }
          
          .service-card:hover .cta-button {
            background-color: #307926;
            border-color: #307926;
          }
          
          .service-card:hover .cta-button span {
            color: #ffffff;
          }
          
          .service-card:hover .cta-button i {
            color: #ffffff;
            transform: translateX(5px);
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .service-card .card-wrapper {
              margin-bottom: 20px;
            }
          }
          
          @media (min-width: 1200px) {
            .service-card .card-wrapper {
              max-width: 500px;
              margin: 0 auto;
            }
          }
        `}</style>
      </section>
    </>
  )
}