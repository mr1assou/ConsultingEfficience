import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Blog2() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="blog page">
        <div>
          {/* Blog Page Two Area start */}
          <div className="blog-page-two pt-100 rpt-70">
            <div className="container">
              <div className="row gap-50">
                <div className="col-lg-8">
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

                    <div className="image">
                      <img src="/assets/images/blog/act1.png" alt="Blog" />
                    </div>
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

                    <div className="image">
                      <video
                        src="/assets/images/video/video.mp4"
                        controls
                        autoPlay={false}
                        poster="/assets/images/video/thumbnail.png"
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

                <div className="col-lg-4 col-md-7 col-sm-9">
                  <div className="main-sidebar rmt-65">
                    <div className="widget widget-author wow fadeInUp delay-0-4s">
                      <img src="/assets/images/logos/logo.png" alt="Author" />
                    </div>

                    <div className="widget widget-category wow fadeInUp delay-0-4s">
                      <h5 className="widget-title">Catégories</h5>
                      <ul>
                        <li>
                          <Link href="/formation">
                            Formations <span>01</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coaching">
                            Coaching <span>02</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                      <h5 className="widget-title"></h5>
                      <div className="tag-coulds">
                        <Link href="/service-details">Prospection &amp; Vente</Link>
                        <Link href="/service-details">Négociation</Link>
                        <Link href="/service-details">Management</Link>
                        <Link href="/service-details">Communication &amp; Influence</Link>
                        <Link href="/service-details">Développement personnel</Link>
                        <Link href="/service-details2">Leadership</Link>
                        <Link href="/service-details2">Posture professionnelle</Link>
                        <Link href="/service-details2">Croissance personnelle</Link>
                        <Link href="/service-details2">Mieux-être durable</Link>
                      </div>
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
          <div className="headline-area bgc-primary py-20">
            <div className="headline-wrap style-two color-black">
              <span className="marquee-wrap">
                <span className="marquee-inner left">
                  <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                  <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                </span>
              </span>
            </div>
          </div>
          {/* Headline Area end */}
        </div>
      </Layout>
    </>
  )
}
