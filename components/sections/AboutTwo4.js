import Image from "next/image"

export default function AboutTwo4() {
  return (
    <>
      <section id="about" className="about-two-area pt-90 pb-85 rpt-100 rpb-50 rel z-1">
        <div className="container">
          {/* Wrapper that controls vertical spacing between sections */}
          <div className="section-stack">
            {/* Section 1: POURQUOI NOUS CONFIER VOS BUDGETS FAF / OPCO ? */}
            <div
              className="section-container"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                padding: "clamp(20px, 4vw, 30px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-12 mb-4 mb-lg-0">
                  <div className="section-image" style={{ textAlign: "center" }}>
                    <Image
                      width={300}
                      height={300}
                      priority
                      src="/assets/images/about/about-three.png"
                      alt="FAF OPCO Benefits"
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12">
                  <div className="section-content">
                    <h2
                      style={{
                        fontSize: "clamp(20px, 4vw, 32px)",
                        fontWeight: "800",
                        color: "#183D58",
                        marginBottom: "clamp(20px, 4vw, 25px)",
                        lineHeight: "1.3",
                        textAlign: "left",
                      }}
                    >
                      POURQUOI NOUS CONFIER VOS BUDGETS FAF / OPCO ?
                    </h2>
                    <div className="benefits-list">
                      <div
                        className="benefit-item"
                        style={{
                          padding: "clamp(10px, 2vw, 12px) 0",
                          borderBottom: "1px solid #e9ecef",
                        }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "600",
                            color: "#183D58",
                            margin: 0,
                          }}
                        >
                          Formations 100% éligibles Qualiopi
                        </h6>
                      </div>
                      <div
                        className="benefit-item"
                        style={{
                          padding: "clamp(10px, 2vw, 12px) 0",
                          borderBottom: "1px solid #e9ecef",
                        }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "600",
                            color: "#183D58",
                            margin: 0,
                          }}
                        >
                          Zéro reste à charge inutile
                        </h6>
                      </div>
                      <div
                        className="benefit-item"
                        style={{
                          padding: "clamp(10px, 2vw, 12px) 0",
                          borderBottom: "1px solid #e9ecef",
                        }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "600",
                            color: "#183D58",
                            margin: 0,
                          }}
                        >
                          Vos droits utilisés sans expiration
                        </h6>
                      </div>
                      <div className="benefit-item" style={{ padding: "clamp(10px, 2vw, 12px) 0" }}>
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "600",
                            color: "#183D58",
                            margin: 0,
                          }}
                        >
                          Gain de temps on s'occupe de tout
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: NOTRE ACCOMPAGNEMENT */}
            <div
              className="section-container"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                padding: "clamp(20px, 4vw, 30px)",
                position: "relative",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-12 mb-4 mb-lg-0">
                  <div className="section-image" style={{ textAlign: "center" }}>
                    <Image
                      width={300}
                      height={300}
                      priority
                      src="/assets/images/about/experience-corner.png"
                      alt="Notre Accompagnement"
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12">
                  <div className="section-content">
                    <h2
                      style={{
                        fontSize: "clamp(20px, 4vw, 32px)",
                        fontWeight: "800",
                        color: "#183D58",
                        marginBottom: "clamp(20px, 4vw, 25px)",
                        lineHeight: "1.3",
                        textAlign: "left",
                      }}
                    >
                      NOTRE ACCOMPAGNEMENT
                    </h2>
                    <div className="benefits-list">
                      <div
                        className="benefit-item"
                        style={{ padding: "clamp(12px, 2.5vw, 15px) 0", borderBottom: "1px solid #e9ecef" }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Diagnostic gratuit :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Étude de vos besoins et de vos enjeux
                        </p>
                      </div>

                      <div
                        className="benefit-item"
                        style={{ padding: "clamp(12px, 2.5vw, 15px) 0", borderBottom: "1px solid #e9ecef" }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Recherche de financements :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Mobilisation des dispositifs (FAF/OPCO)
                        </p>
                      </div>

                      <div
                        className="benefit-item"
                        style={{ padding: "clamp(12px, 2.5vw, 15px) 0", borderBottom: "1px solid #e9ecef" }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Montage de dossier :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Gestion des démarches administratives
                        </p>
                      </div>

                      <div className="benefit-item" style={{ padding: "clamp(12px, 2.5vw, 15px) 0" }}>
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Suivi et reporting :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Un interlocuteur unique pour votre dossier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: CE QUE VOUS Y GAGNEZ */}
            <div
              className="section-container"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                padding: "clamp(20px, 4vw, 30px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-12 mb-4 mb-lg-0">
                  <div className="section-image" style={{ textAlign: "center" }}>
                    <Image
                      width={300}
                      height={300}
                      priority
                      src="/assets/images/about/sn.png"
                      alt="Ce que vous y gagnez"
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12">
                  <div className="section-content">
                    <h2
                      style={{
                        fontSize: "clamp(20px, 4vw, 32px)",
                        fontWeight: "800",
                        color: "#183D58",
                        marginBottom: "clamp(20px, 4vw, 25px)",
                        lineHeight: "1.3",
                        textAlign: "left",
                      }}
                    >
                      CE QUE VOUS Y GAGNEZ :
                    </h2>

                    <div className="benefits-list">
                      <div
                        className="benefit-item"
                        style={{ padding: "clamp(12px, 2.5vw, 15px) 0", borderBottom: "1px solid #e9ecef" }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Former plus, sans dépenser plus :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Vos budgets FAF/OPCO sont entièrement mobilisés pour financer vos besoins.
                        </p>
                      </div>

                      <div
                        className="benefit-item"
                        style={{ padding: "clamp(12px, 2.5vw, 15px) 0", borderBottom: "1px solid #e9ecef" }}
                      >
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Des équipes qui montent en compétence :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Plus efficaces, plus motivées, et directement opérationnelles.
                        </p>
                      </div>

                      <div className="benefit-item" style={{ padding: "clamp(12px, 2.5vw, 15px) 0" }}>
                        <h6
                          style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            fontWeight: "700",
                            color: "#307926",
                            margin: "0 0 8px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          Une trésorerie protégée :
                        </h6>
                        <p
                          style={{
                            fontSize: "clamp(13px, 2.2vw, 14px)",
                            color: "#183D58",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          Vous transformez vos cotisations obligatoires en 1 investissement rentable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END Section 3 */}
          </div>
        </div>
      </section>

      {/* Styled-jsx to control vertical spacing between sections */}
      <style jsx>{`
        .section-stack {
          display: grid;
          gap: clamp(50px, 8vw, 70px); /* Increased margin between sections */
        }
      `}</style>
    </>
  )
}
