import Link from "next/link"

export default function ServicesFour4() {
  return (
    <>
      <section
        style={{
          background: "#F8F9FA", 
          padding: "80px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
        }}
      >
        {/* Subtle Geometric Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.8,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Light grey trapezoidal shape - upper left */}
            <path
              d="M 0 0 L 300 50 L 250 150 L 50 100 Z"
              fill="#E8ECF0"
            />
            
            {/* Light green diamond/quadrilateral shape - center */}
            <path
              d="M 350 100 L 500 50 L 650 100 L 500 200 Z"
              fill="#D4E8D4"
            />
            
            {/* Light green triangular shape - bottom left */}
            <path
              d="M 0 250 L 200 350 L 150 300 Z"
              fill="#D4E8D4"
            />
            
            {/* Light grey triangular shape - upper right */}
            <path
              d="M 700 0 L 900 100 L 800 200 Z"
              fill="#E8ECF0"
            />
            
            {/* Light green triangular shape - bottom right */}
            <path
              d="M 800 250 L 1000 350 L 950 300 Z"
              fill="#D4E8D4"
            />
            
            {/* Additional subtle geometric accents */}
            <path
              d="M 200 50 L 300 100 L 250 150 Z"
              fill="#E8ECF0"
              opacity="0.6"
            />
            
            <path
              d="M 600 150 L 700 200 L 650 250 Z"
              fill="#D4E8D4"
              opacity="0.7"
            />
            
            {/* Soft connecting shapes */}
            <path
              d="M 100 200 L 200 250 L 150 300 Z"
              fill="#E8ECF0"
              opacity="0.5"
            />
            
            <path
              d="M 750 150 L 850 200 L 800 250 Z"
              fill="#D4E8D4"
              opacity="0.6"
            />
          </svg>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 5vw, 40px)",
                fontWeight: 800,
                color: "#1E3A53",
                lineHeight: 1.2,
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
              lineHeight: 1.5,
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
