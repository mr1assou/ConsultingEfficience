import React from "react";

function CenterPattern({
  dark = "#2C5172",
  accent = "#4A8F3F",
  height = "100vh",
  zIndex = 1,
  opacity = 0.85,
}) {
  return (
    <>
      <div className="center-pattern" aria-hidden="true">
        <svg
          className="pattern-svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          {/* Blue wave top */}
          <path
            d="M0 300 Q960 150 1920 300 L1920 0 L0 0 Z"
            fill={dark}
            opacity={opacity}
          />
          {/* Green wave middle */}
          <path
            d="M0 600 Q960 450 1920 600 L1920 300 L0 300 Z"
            fill={accent}
            opacity={opacity}
          />
          {/* Blue wave bottom */}
          <path
            d="M0 1080 Q960 900 1920 1080 L1920 600 L0 600 Z"
            fill={dark}
            opacity={opacity}
          />
        </svg>
      </div>

      <style jsx>{`
        .center-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height};
          overflow: hidden;
          z-index: ${zIndex};
          pointer-events: none;
        }
        .pattern-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </>
  );
}

export default CenterPattern;
