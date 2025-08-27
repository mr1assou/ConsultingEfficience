import Link from "next/link"
import Image from "next/image"

export default function ServicesThree2() {
  return (
    <>
      <section
        className="services-area-three py-130 rpy-100 rel z-1 gap-10"
        style={{ backgroundImage: 'url(assets/images/services/service-bg.png)' }}
      >
        <div className="container">
          <div className="row pb-30 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-20 rmb-35">
                <span className="sub-title mb-15">Service de consulting de confiance</span>
                <h2>Services consulting que vous obtenez</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 wow fadeInRight delay-0-2s">
              <div className="text mb-20">
                Efficience Consulting offre un service de confiance structuré en deux volets : formation et coaching.
                La formation développe les compétences clés pour optimiser la performance des équipes.
                Le coaching accompagne les professionnels dans l'atteinte de leurs objectifs et le renforcement de leur leadership.
              </div>
            </div>
          </div>
        </div>

        <div className="container container-1450">
          <div className="row justify-content-center g-5">

            {/* CARD: Formation */}
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <Link href="/formation" className="service-style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/services/service1.png" alt="Service" />
                </div>

                {/* was <Link> —> replace by span/button to avoid nested anchors */}
                <span className="details-btn" aria-hidden="true">
                  <i className="fal fa-long-arrow-right" />
                </span>

                <div className="hover-content">
                  <div className="icon">
                    <img src="/assets/images/icons/promotion.png" alt="Icon" />
                  </div>
                  <h6>Formation</h6>
                </div>

                <div className="content">
                  <h6>Formation</h6>
                  <p>
                    Nous offrons des programmes sur mesure, interactifs et adaptés pour développer les compétences clés
                    et optimiser la performance professionnelle
                  </p>
                </div>
              </Link>
            </div>

            {/* CARD: Coaching */}
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <Link href="/coaching" className="service-style-three wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="/assets/images/services/service2.jpg" alt="Service" />
                </div>

                {/* was <Link> —> replace by span */}
                <span className="details-btn" aria-hidden="true">
                  <i className="fal fa-long-arrow-right" />
                </span>

                <div className="hover-content">
                  <div className="icon">
                    <img src="/assets/images/icons/development-2.png" alt="Icon" />
                  </div>
                  <h6>Coaching</h6>
                </div>

                <div className="content">
                  <h6>Coaching</h6>
                  <p>
                    Nous proposons un coaching personnalisé, axé sur le développement des compétences, le renforcement
                    du leadership et l’accompagnement vers l’atteinte des objectifs professionnels
                  </p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
