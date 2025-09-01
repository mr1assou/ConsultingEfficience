import Link from "next/link"

export default function ServicesFour4() {
  return (
    <>
      
      <section
        style={{
          background: "#E9EDF2", 
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: 20 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 5vw, 40px)",
                fontWeight: 800,
                color: "#1E3A53",
                lineHeight: 1.2,         // 👈 réduit l’espace vertical
              }}
            >
              OPTIMISATION PÉDAGOGIQUE ET
              <br />
              <span>FINANCIÈRE</span>
              <br />
              DE VOS FORMATIONS
            </h2>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.5,           // 👈 réduit aussi l’espace du texte
              color: "#1E3A53",
              fontWeight: 600,
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            Transformez vos budgets de formation en levier de croissance.
            <br />
            Nos formations sont toutes éligibles FAF/OPCO et nous vous
            accompagnons pour maximiser vos prises en charge.
          </p>
        </div>
      </section>
    </>
  )
}
