"use client"
import Layout from "@/components/layout/Layout";
import Image from 'next/image'; // 1. Import the Image component
import P_Background from '/public/assets/images/background/p.png'; // 2. Import the image file directly

export default function Contact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        {/* Background wrapper */}
        <div
          className="contact-bg"
          style={{
            position: "relative", // 3. The parent container must have a relative position
            width: "100%",
            minHeight: "100vh",
          }}
        >
          {/* Use the Image component for the background */}
          <Image
            src={P_Background}
            alt="Decorative background"
            fill // 4. Use the fill prop to make the image fill the parent
            style={{
              objectFit: "cover", // 5. Use objectFit to ensure the image covers the entire area
              objectPosition: "center", // 6. Center the image
              zIndex: -1, // 7. Set z-index to a negative value to place it behind content
            }}
          />

          {/* Gradient Overlay for contrast */}
          <div className="contact-overlay" />

          {/* Content container */}
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="row align-items-start justify-content-between py-100 rpy-80">
              {/* LEFT: Headline / Subheadline */}
              <div className="col-12 col-lg-6 mb-40">
                <div className="left-copy">
                  <span className="eyebrow">Demande d’information</span>
                  <h1 className="headline">
                    Une idée,<br />
                    une envie,<br />
                    un projet en tête ?
                  </h1>
                  <p className="subheadline">
                    Et si nous en parlions ensemble !
                  </p>

                  {/* Optional: small bullet highlights (remove if not needed) */}
                  <ul className="highlights">
                    <li>Réponse rapide et personnalisée</li>
                    <li>Accompagnement de l’idée jusqu’à la réalisation</li>
                    <li>Confidentialité garantie</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT: Contact Form */}
              <div className="col-12 col-lg-5">
                <section
                  className="contact-card"
                  aria-labelledby="contactTitle"
                >
                  <h2 id="contactTitle" className="form-title">
                    Demande d'information
                  </h2>

                  <div className="contact-page-form">
                    <form
                      action="#"
                      method="post"
                      className="row g-3"
                      aria-describedby="contactHelp"
                    >
                      <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">
                          Prénom*
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="form-control"
                          placeholder="Prénom"
                          required
                          inputMode="text"
                          autoComplete="given-name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">
                          Nom*
                        </label>
                        <input
                          type="text"
                          id="lname"
                          name="Nom"
                          className="form-control"
                          placeholder="Ex. El Amrani"
                          required
                          inputMode="text"
                          autoComplete="family-name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Adresse email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="adresse email"
                          required
                          inputMode="email"
                          autoComplete="email"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Numéro de téléphone*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="+3 6 XX XX XX XX"
                          required
                          inputMode="tel"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Votre message*
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={5}
                          placeholder="Décrivez votre idée, besoin ou projet…"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <small id="contactHelp" className="help-text">
                          En envoyant ce formulaire, vous acceptez d’être
                          contacté(e) par notre équipe. Vos données restent
                          confidentielles.
                        </small>
                      </div>

                      <div className="col-12 d-grid">
                        <button type="submit" className="theme-btn style-two">
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Decorative ribbon on the far right (optional) */}
          <div className="edge-ribbon" aria-hidden="true" />
        </div>

        {/* Component-scoped styles */}
        <style jsx>{`
          .py-100 {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          .rpy-80 {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .mb-40 {
            margin-bottom: 40px;
          }

          .contact-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.45) 0%,
              rgba(0, 0, 0, 0.35) 30%,
              rgba(0, 0, 0, 0.15) 60%,
              rgba(0, 0, 0, 0.05) 100%
            );
            z-index: 1;
          }

          .left-copy {
            color: #fff;
            max-width: 680px;
          }

          .eyebrow {
            display: inline-block;
            letter-spacing: 0.08em;
            font-size: 0.8rem;
            text-transform: uppercase;
            color: #e7f0f7;
            background: rgba(255, 255, 255, 0.14);
            padding: 6px 10px;
            border-radius: 999px;
            backdrop-filter: blur(2px);
            margin-bottom: 14px;
          }

          .headline {
            font-size: clamp(2rem, 4.2vw, 3.2rem);
            line-height: 1.08;
            color:white;
            font-weight: 800;
            margin: 14px 0 12px;
            text-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          }

          .subheadline {
            font-size: clamp(1.05rem, 1.6vw, 1.25rem);
            margin: 12px 0 22px;
            color: #f4f8fb;
            opacity: 0.95;
          }

          .highlights {
            margin: 0;
            padding: 0;
            list-style: none;
            display: grid;
            gap: 8px;
          }
          .highlights li {
            position: relative;
            padding-left: 26px;
            font-size: 0.98rem;
            color: #eaf3fb;
          }
          .highlights li::before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #49a16f;
            position: absolute;
            left: 0;
            top: 8px;
            box-shadow: 0 0 0 4px rgba(73, 161, 111, 0.25);
          }

          .contact-card {
            background: rgba(255, 255, 255, 0.92);
            border-radius: 14px;
            padding: 28px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
            backdrop-filter: blur(6px);
          }

          .form-title {
            font-size: 1.35rem;
            font-weight: 700;
            margin: 4px 0 16px;
            color: #0f2235;
            position: relative;
          }
          .form-title::after {
            content: "";
            display: block;
            width: 56px;
            height: 3px;
            border-radius: 999px;
            background: linear-gradient(90deg, #2c5172, #4a8f3f);
            margin-top: 10px;
          }

          .form-label {
            font-size: 0.85rem;
            font-weight: 600;
            color: #23405a;
            margin-bottom: 6px;
          }
          .form-control {
            font-size: 0.95rem;
            padding: 10px 12px;
            border: 1px solid rgba(15, 34, 53, 0.12);
            border-radius: 10px;
            background: #fff;
            transition: border-color 0.2s, box-shadow 0.2s, transform 0.08s;
          }
          .form-control:focus {
            outline: none;
            border-color: #2c5172;
            box-shadow: 0 0 0 4px rgba(44, 81, 114, 0.15);
          }
          .form-control:active {
            transform: translateY(1px);
          }

          .help-text {
            display: inline-block;
            font-size: 0.78rem;
            color: #5d7186;
            margin-top: 2px;
          }

          .theme-btn.style-two {
            font-size: 0.95rem;
            padding: 12px 20px;
            border-radius: 999px;
            border: none;
            background: linear-gradient(90deg, #2c5172, #4a8f3f);
            color: #fff;
            font-weight: 700;
            box-shadow: 0 12px 24px rgba(44, 81, 114, 0.25);
            transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.15s;
          }
          .theme-btn.style-two:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 32px rgba(44, 81, 114, 0.32);
            filter: brightness(1.03);
          }
          .theme-btn.style-two:active {
            transform: translateY(0);
          }
          .d-grid {
            display: grid;
          }

          .edge-ribbon {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: min(8vw, 80px);
            background: linear-gradient(
              180deg,
              rgba(44, 81, 114, 0.9) 0%,
              rgba(73, 143, 63, 0.9) 100%
            );
            opacity: 0.18;
            z-index: 1;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%);
          }

          /* Responsive tweaks */
          @media (max-width: 991px) {
            .contact-card {
              padding: 22px;
            }
            .headline {
              margin-bottom: 6px;
            }
            .edge-ribbon {
              display: none;
            }
          }

          @media (max-width: 575px) {
            .py-100 {
              padding-top: 72px;
              padding-bottom: 60px;
            }
            .contact-card {
              border-radius: 12px;
            }
            .left-copy {
              text-align: left; /* keep left-align on mobile for brand look */
            }
          }
        `}</style>
      </Layout>
    </>
  );
}