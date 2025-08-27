'use client'
import { useState } from 'react'

export default function Accordion2() {
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
      <div className="accordion wow fadeInUp delay-0-2s" id="faq-accordion">
        {/* 1. Prospection */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(1)}>
            <button
              className={isActive.key === 1 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Comment vos formations aident-elles nos équipes à générer plus de leads ?
            </button>
          </h5>
          <div
            id="collapseOne"
            className={isActive.key === 1 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Nous travaillons des méthodes de prospection modernes (social selling, séquences d’emailing
                et scripts d’appels) avec des ateliers pratiques. Chaque participant repart avec un plan
                d’actions et des templates prêts à l’emploi pour produire des relances efficaces dès le
                lendemain.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Vente */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(2)}>
            <button
              className={isActive.key === 2 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Vos modules Vente conviennent-ils à des commerciaux débutants et confirmés ?
            </button>
          </h5>
        <div
            id="collapseTwo"
            className={isActive.key === 2 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Oui. Les parcours sont modulaires : bases de découverte des besoins, qualification,
                démonstration orientée valeur, traitement des objections et closing. Nous adaptons les cas
                pratiques au niveau de chaque groupe et à votre cycle de vente réel.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Négociation */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(3)}>
            <button
              className={isActive.key === 3 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Apprenez-vous des techniques de négociation sans baisser nos marges ?
            </button>
          </h5>
          <div
            id="collapseThree"
            className={isActive.key === 3 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Absolument. Nous travaillons la préparation (BATNA/MAAN), les concessions conditionnelles,
                la défense de la valeur et les tactiques d’achats courantes pour conclure au meilleur
                compromis tout en préservant la relation client.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Management */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(4)}>
            <button
              className={isActive.key === 4 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              Que couvre votre formation Management pour nos managers de proximité ?
            </button>
          </h5>
          <div
            id="collapseFour"
            className={isActive.key === 4 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Les fondamentaux : posture de manager-coach, fixation d’objectifs, feedback, 1:1 efficaces,
                priorisation et gestion des conflits. Des outils concrets et des mises en situation ancrent
                les apprentissages.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Communication & influence */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(5)}>
            <button
              className={isActive.key === 5 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              Aidez-vous nos équipes à mieux pitcher et convaincre en réunion ?
            </button>
          </h5>
          <div
            id="collapseFive"
            className={isActive.key === 5 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Oui. Nous travaillons la structure du message (storytelling, pyramide de Minto), la prise
                de parole, le langage non verbal et la gestion des objections en live. Chaque participant
                repart avec un pitch construit et testé.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Développement personnel */}
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleClick(6)}>
            <button
              className={isActive.key === 6 ? 'accordion-button' : 'accordion-button collapsed'}
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
            >
              Proposez-vous des modules sur la confiance en soi et la gestion du stress ?
            </button>
          </h5>
          <div
            id="collapseSix"
            className={isActive.key === 6 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>
                Oui, avec des outils opérationnels : identification des drivers, techniques de respiration,
                planification antistress, gestion de l’énergie et ancrage d’habitudes positives pour
                gagner en sérénité et en impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
