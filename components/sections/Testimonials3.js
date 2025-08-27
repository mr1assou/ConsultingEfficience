'use client'

import { useRef } from 'react'
import VideoPopup from "../elements/VideoPopup"

const slides = [
    {
        title: 'Attestation Qualiopi',
        subtitle: 'Efficience Consulting',
        body: '',
        img: '/assets/images/testimonials/test.png',
    },
    {
        title: 'Nos Evaluations',
        subtitle: 'Efficience Consulting',
        body: 'Développez l’impact managérial avec des pratiques concrètes et applicables.',
        img: '/assets/images/testimonials/test2.png',
    },
    {
        title: 'Règlement intérieur',
        subtitle: 'Efficience Consulting',
        body: 'Structurer vos deals, gagner en assurance et obtenir de meilleurs résultats.',
        img: '/assets/images/testimonials/testpdf.png', // ⬅️ show the button on this one
    },
]

export default function ServicesWideScroll() {
    const railRef = useRef(null)

    const scrollSlides = (dir = 1) => {
        const rail = railRef.current
        if (!rail) return
        const slideWidth = rail.firstChild?.getBoundingClientRect().width || window.innerWidth
        rail.scrollBy({ left: dir * slideWidth, behavior: 'smooth' })
    }

    return (
        <section className="blk-carousel">
            <div className="container-fluid px-0 position-relative">
                {/* arrows — visible on ALL breakpoints */}
                <button className="arrow left" onClick={() => scrollSlides(-1)} aria-label="Prev">
                    ‹
                </button>
                <button className="arrow right" onClick={() => scrollSlides(1)} aria-label="Next">
                    ›
                </button>

                {/* horizontal rail */}
                <div ref={railRef} className="rail" role="region" aria-label="Horizontal services carousel">
                    {slides.map((s, i) => (
                        <section key={i} className="panel">
                            <div className="content">
                                {/* LEFT: text */}
                                <div className="text">
                                    <h2 className="title">{s.title}</h2>
                                    {s.subtitle && <p className="subtitle">{s.subtitle}</p>}
                                    <p className="body">{s.body}</p>
                                </div>

                                {/* RIGHT: image + (conditional) overlay button */}
                                <div className="imgWrap">
                                    <img src={s.img} alt={s.title} style={{ height: '500px' }} />
                                    {s.img === '/assets/images/testimonials/testpdf.png' && (
                                        <div className="imgOverlay" aria-hidden="false">
                                            {/* If your component needs a file URL prop, pass it here */}
                                            {/* <VideoPopup style={1} fileUrl="/docs/reglement-interieur.pdf" /> */}
                                            <VideoPopup style={2} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            <style jsx>{`
        :root {
          --primary-color: #c4ef17;
          --heading-color: #ffffff;
          --base-color: #83827f;
          --lighter-color: rgba(255, 255, 255, 0.06);
          --border-color: rgba(92, 99, 123, 0.3);
        }

        .blk-carousel {
          background: #000;
          color: var(--heading-color);
          position: relative;
        }

        .rail {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .rail::-webkit-scrollbar { height: 6px; }
        .rail::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 6px;
        }

        .panel {
          min-width: 100vw;
          scroll-snap-align: start;
          padding: clamp(1.25rem, 3vw, 2.5rem);
        }

        .content {
          display: grid;
          grid-template-columns: 1fr minmax(320px, 560px);
          gap: clamp(1rem, 3vw, 2rem);
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .text .title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          margin: 0 0 0.25em 0;
          color: var(--heading-color);
        }
        .text .subtitle {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .text .body {
          color: var(--base-color);
          font-size: clamp(1rem, 1.2vw, 1.125rem);
          max-width: 60ch;
        }

        .imgWrap {
          position: relative; /* needed for overlay */
          background: var(--lighter-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: clamp(0.5rem, 1vw, 0.75rem);
          overflow: hidden;
        }
        .imgWrap img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: contain;
        }

        /* Centered overlay for the PDF slide */
        .imgOverlay {
  position: absolute;
  top: 0;              /* stick to top */
  left: 0;             /* align to left */
  width: 100%;         /* span full width of image */
  display: flex;
  align-items: flex-start;  /* align content to top */
  justify-content: center;  /* center horizontally */
  padding: 0.75rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
  pointer-events: none; /* allow clicks through except button */
}

.imgOverlay :global(button),
.imgOverlay :global(a),
.imgOverlay :global(.btn) {
  pointer-events: auto; /* make button clickable */
}

        /* ARROWS */
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;

          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 28px;
          line-height: 1;
          letter-spacing: -0.04em;

          color: var(--heading-color);
          background:
            radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.02) 100%),
            var(--lighter-color);
          border: 1px solid var(--border-color);
          box-shadow: 0 6px 18px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);

          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, color 160ms ease;
        }
        .arrow.left  { left: 16px; }
        .arrow.right { right: 16px; }
        .arrow:hover {
          transform: translateY(-50%) scale(1.06);
          border-color: var(--primary-color);
          color: var(--primary-color);
          box-shadow: 0 10px 24px rgba(0,0,0,0.55), 0 0 0 6px rgba(196,239,23,0.12);
        }
        .arrow:active { transform: translateY(-50%) scale(0.98); }
        .arrow:focus-visible {
          outline: none;
          box-shadow: 0 10px 24px rgba(0,0,0,0.55), 0 0 0 2px #000, 0 0 0 6px rgba(196,239,23,0.45);
        }

        /* RESPONSIVE */
        @media (max-width: 991.98px) {
          .content { grid-template-columns: 1fr 420px; }
          .arrow { width: 48px; height: 48px; font-size: 24px; }
          .arrow.left  { left: 12px; }
          .arrow.right { right: 12px; }
        }
        @media (max-width: 767.98px) {
          .panel { padding: 1.25rem; }
          .content { grid-template-columns: 1fr; }
          .imgWrap { order: 2; }
          .arrow { width: 44px; height: 44px; font-size: 22px; }
          .arrow.left  { left: 10px; }
          .arrow.right { right: 10px; }
        }
      `}</style>
        </section>
    )
}
