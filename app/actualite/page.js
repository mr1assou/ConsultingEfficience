"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import LeftEdgePattern from "@/components/elements/LeftEdgePatter"

export default function Blog2() {
  return (
    <>
      <style jsx global>{`
  :root{
    --primary-color:#307926;   /* green */
    --secondary-color:#183D58; /* navy */
  }

  /* Ensure page content sits above background */
  body, #__next, .page-root { position: relative; z-index: 0; }

  /* Fixed right-side background, behind all content */
  .right-ribbon-bg{
    position: fixed;
    inset: 0 0 0 auto;   /* stick to the right */
    width: min(26vw, 420px);
    height: 100vh;
    z-index: -1;
    pointer-events: none;        /* never block clicks */
    filter: drop-shadow(-10px 0 30px rgba(0,0,0,.15));
  }

  /* Let content breathe on small screens */
  @media (max-width: 992px){
    .right-ribbon-bg{ width: 32vw; }
  }
  @media (max-width: 768px){
    .right-ribbon-bg{ width: 40vw; opacity:.6; } /* subtler on mobile */
  }
  @media (max-width: 520px){
    .right-ribbon-bg{ display:none; } /* hide if it cramps layout */
  }

  /* Optional: reduce animation for accessibility */
  @media (prefers-reduced-motion: reduce){
    .right-ribbon-bg svg *{ animation:none !important; }
  }
`}</style>

      <style jsx global>{`
  /* Left-side background, behind all content */
  .left-ribbon-bg{
    position: fixed;
    inset: 0 auto 0 0;   /* stick to the left */
    width: min(26vw, 420px);
    height: 100vh;
    z-index: -1;
    pointer-events: none;
    filter: drop-shadow(10px 0 30px rgba(0,0,0,.15)); /* shadow opposite side */
  }

  @media (max-width: 992px){
    .left-ribbon-bg{ width: 32vw; }
  }
  @media (max-width: 768px){
    .left-ribbon-bg{ width: 40vw; opacity:.6; }
  }
  @media (max-width: 520px){
    .left-ribbon-bg{ display:none; }
  }
`}</style>
      {/* Right-side geometric ribbon (UNDER all components) */}
      <div className="right-ribbon-bg" aria-hidden>
        <svg
          width="100%" height="100%" viewBox="0 0 300 1000"
          preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"
        >

          <polygon points="0,0 300,0 240,180 160,220" fill="var(--secondary-color)" />
          <polygon points="160,220 240,180 190,420 90,500" fill="var(--primary-color)" />
          <polygon points="90,500 190,420 260,620 200,700" fill="var(--secondary-color)" />
          <polygon points="200,700 260,620 300,920 130,1000" fill="var(--primary-color)" />
          <polygon points="190,420 260,620 245,635 175,455" fill="#ffffff" opacity=".06" />
          <polygon points="240,180 190,420 175,430 225,185" fill="#ffffff" opacity=".06" />
        </svg>
      </div>
      <div className="left-ribbon-bg" aria-hidden>
        <svg
          width="100%" height="100%" viewBox="0 0 300 1000"
          preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="300,0 0,0 60,180 140,220" fill="var(--secondary-color)" />
          <polygon points="140,220 60,180 110,420 210,500" fill="var(--primary-color)" />
          <polygon points="210,500 110,420 40,620 100,700" fill="var(--secondary-color)" />
          <polygon points="100,700 40,620 0,920 170,1000" fill="var(--primary-color)" />

          {/* subtle white highlights for depth */}
          <polygon points="110,420 40,620 55,635 125,455" fill="#ffffff" opacity=".06" />
          <polygon points="60,180 110,420 125,430 75,185" fill="#ffffff" opacity=".06" />
        </svg>
      </div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="blog page">

        <div>
          {/* Blog Page Two Area start */}
          <div className="blog-page-two pt-100 rpt-70">
            <div className="container">
              <div className="row gap-50">
                <div >
                  <div className="blog-standard-item wow fadeInUp delay-0-2s">
                    <div className="content">
                      <blockquote>
                        <h4>
                          <p>
                            “Les actualités d&apos;aujourd&apos;hui, c&apos;est l&apos;histoire de demain.”
                          </p>
                        </h4>
                        <cite>
                          <Link href="#">— Raymond Queneau</Link>
                        </cite>
                      </blockquote>
                    </div>

                   
                    <Image width={1100} height={600} priority src="/assets/images/blog/act1.png" alt="Blog" />
                 
                  </div>

                  {/* === 2022 (NE PAS MODIFIER) === */}
                  <div className="blog-standard-item wow fadeInUp delay-0-2s">
                    <div className="content">
                      <h4>
                        <Link href="/blog-details">Revivez la victoire aux Négociales 2022</Link>
                      </h4>
                      <p>
                        Les Lorrains sont (à nouveau) les meilleurs Deux Nancéiens décrochent les
                        médailles d&apos;or et de bronze 🥇🥉 des meilleurs négociateurs de France 🇫🇷 face à
                        5000 participants ! Bravo.
                      </p>
                    </div>

                    <div className="video-wrapper" style={{ position: "relative", maxWidth: "960px" }}>
                      <video
                        src="/assets/images/video/video.mp4"
                        controls
                        autoPlay={false}
                        muted
                        loop
                        style={{ width: "100%", height: "auto" }}
                      />
                      
                    </div>

                  </div>

                  <div className="blog-standard-item wow fadeInUp delay-0-2s">
                    <div className="content">
                      <p>
                        Les Négociales constituent la plus grande compétition de négociation
                        commerciale en France, rassemblant chaque année près de 5 000 étudiants issus
                        de toutes les écoles de commerce, d’ingénieurs et d’universités. Cet événement
                        met en lumière les futurs talents de la vente et de la relation client à
                        travers des mises en situation réelles face à des professionnels. En 2022, la
                        victoire est revenue à une équipe lorraine, confirmant une nouvelle fois
                        l’excellence de la région dans l’art de la négociation. Fait marquant, le
                        groupe gagnant a été formé et accompagné par l’agence Consulting Efficiency, et
                        plus particulièrement encadré par Ryad Mimeche, qui a contribué à cette
                        performance remarquable.
                      </p>
                    </div>
                  </div>

                  {/* === 2019 (AJOUT : Ryad Mimeche a coaché le vainqueur) === */}
                  <div className="blog-standard-item wow fadeInUp delay-0-2s">
                    <div className="content">
                      <h4>
                        <Link href="/blog-details">Revivez la victoire aux Négociales 2019</Link>
                      </h4>
                      <p>
                        le vainqueur national 2019 a été <b>coaché par
                          Ryad Mimeche</b>, dont l&apos;accompagnement a joué un rôle déterminant dans cette
                        réussite. Bravo à toute l&apos;équipe !
                      </p>
                    </div>
                    <div className="image">
                      <img src="/assets/images/video/2019.png" alt="Blog" />
                    </div>
                  </div>

                  <div className="blog-standard-item wow fadeInUp delay-0-2s">
                    <div className="content">
                      <p>
                        En 2019, l’édition a confirmé l’exigence et la portée nationale des
                        Négociales. Le titre suprême est revenu à un lauréat coaché par <b>Ryad
                          Mimeche</b>, soulignant l’importance de la préparation, de la rigueur
                        méthodologique et de la posture professionnelle dans la performance de haut
                        niveau. Cette réussite a mis en lumière la dynamique lorraine et l’excellence
                        de l’encadrement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Page Two Area end */}

          {/* Lets Talk Area start */}
          <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
            <div className="container">
              <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">
                Contactez-Nous <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
          {/* Lets Talk Area end */}

          {/* Headline area start */}
          <div className="headline-wrap style-three color-black">
            <span className="marquee-wrap bg-white py-15">
              <span className="marquee-inner left">
                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
              </span>
            </span>
          </div>
          {/* Headline Area end */}
        </div>
      </Layout>

    </>
  )
}
