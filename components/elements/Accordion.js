'use client'
import { useState } from 'react'

export default function Accordion() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: null })
    } else {
      setIsActive({ status: true, key })
    }
  }

  return (
    <>
      <div className="accordion" id="faq-accordion">

        {/* 1 */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(1)}>
            <button className={isActive.key === 1 ? "accordion-button" : "accordion-button collapsed"}>
              01. Quels types de formations propose Efficience Consulting ?
            </button>
          </h5>
          <div className={isActive.key === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
            <div className="accordion-body">
              <p>
                Nous proposons des formations en prospection, vente, négociation, management,
                communication et développement personnel. Chaque programme est conçu sur mesure pour
                répondre aux besoins spécifiques de votre organisation.
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(2)}>
            <button className={isActive.key === 2 ? "accordion-button" : "accordion-button collapsed"}>
              02. En quoi le coaching diffère-t-il des formations classiques ?
            </button>
          </h5>
          <div className={isActive.key === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
            <div className="accordion-body">
              <p>
                Le coaching est un accompagnement individuel ou collectif centré sur les objectifs et la posture.
                Contrairement aux formations, il privilégie la mise en pratique, la prise de recul et l’ancrage
                des comportements durables.
              </p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(3)}>
            <button className={isActive.key === 3 ? "accordion-button" : "accordion-button collapsed"}>
              03. Vos programmes sont-ils adaptés aux PME comme aux grands groupes ?
            </button>
          </h5>
          <div className={isActive.key === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
            <div className="accordion-body">
              <p>
                Oui. Nous adaptons nos contenus en fonction de la taille de l’entreprise, de son secteur
                et de son niveau de maturité. Nos méthodes s’appliquent aussi bien aux PME qu’aux grandes
                organisations internationales.
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(4)}>
            <button className={isActive.key === 4 ? "accordion-button" : "accordion-button collapsed"}>
              04. Comment mesurez-vous l’impact de vos formations ?
            </button>
          </h5>
          <div className={isActive.key === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
            <div className="accordion-body">
              <p>
                Nous combinons des évaluations à chaud et à froid, des indicateurs de performance
                (KPI commerciaux, feedbacks managers) ainsi qu’un suivi post-formation pour garantir
                des résultats concrets et mesurables.
              </p>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(5)}>
            <button className={isActive.key === 5 ? "accordion-button" : "accordion-button collapsed"}>
              05. Proposez-vous des formations en présentiel et à distance ?
            </button>
          </h5>
          <div className={isActive.key === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
            <div className="accordion-body">
              <p>
                Absolument. Nos formations et coachings peuvent être dispensés en présentiel,
                en visioconférence ou en format hybride, pour s’adapter à vos contraintes logistiques
                et à vos équipes réparties.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
