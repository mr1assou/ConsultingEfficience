'use client'
import Slider from "react-slick"
import Image from "next/image"

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
}

export default function Testimonials2() {
    return (
        <>
            <section className="testimonials-two-area pb-115 rpb-80 rel z-1">
                <div className="container">
                    <div className="section-title mb-20 rmb-35">
                        <h2 style={{ color: 'var(--primary-color)' }}>Témoignages Clients</h2>
                    </div>
                    <div className="testimonials-two-inner" style={{ backgroundColor: '#FFFFFF', backgroundImage: 'none' }}>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-3 wow fadeInRight delay-0-2s">
                                <div className="testimonials-image rmb-55" style={{backgroundColor: 'transparent'}}>
                                    <Image 
                                        width={400} 
                                        height={500} 
                                        priority 
                                        src="/assets/images/testimonials/testemo.png" 
                                        alt="Testimonials"
                                        style={{
                                            backgroundColor: 'transparent',
                                            mixBlendMode: 'multiply'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9 wow fadeInLeft delay-0-2s">
                                <Slider {...settings} className="">
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Service de qualité</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Efficience Consulting m’a permis de développer des compétences clés en négociation et en leadership. Leurs formations sont pratiques, claires et directement applicables dans mon quotidien professionnel.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Ahmed Ali</h6>
                                                <span className="designation">ThemeForest Exclusive</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Service de qualité</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Grâce à Efficience Consulting, j’ai pu renforcer ma confiance en moi et améliorer mes capacités de négociation. Leur approche combinant consulting, coaching et formation est à la fois humaine et professionnelle. On sent un réel engagement à accompagner chaque client vers le succès.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Cameron Williamson</h6>
                                                <span className="designation">graphics Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Service de qualité</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Collaborer avec Efficience Consulting a été une expérience extrêmement enrichissante. Leur équipe combine expertise et pédagogie pour proposer des formations adaptées, notamment en développement personnel, en communication et en techniques de négociation.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Leslie Alexander</h6>
                                                <span className="designation">Developpeur</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Service de qualité</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Efficience Consulting est bien plus qu’une simple agence, c’est un véritable partenaire de réussite.Leurs coachings m’ont aidé à mieux gérer le stress et à développer mes compétences relationnelles, tandis que leurs formations en négociation m’ont donné des outils efficaces pour réussir dans mon travail.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Cameron Williamson</h6>
                                                <span className="designation">Enseignant</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
