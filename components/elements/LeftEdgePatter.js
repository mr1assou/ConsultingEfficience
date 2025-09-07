import React, { useEffect } from "react";

function LeftEdgePattern({
  width = 130,
  dark = "#2C5172",
  accent = "#4A8F3F",
  hideBelow = 768,
  pushTargetSelector = "body", // what to pad, default body
}) {
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${hideBelow}px)`);
    const target =
      pushTargetSelector === "body"
        ? document.body
        : document.querySelector(pushTargetSelector);

    const apply = () => {
      if (!target) return;
      if (mq.matches) {
        target.style.paddingLeft = "";
      } else {
        target.style.paddingLeft = `${width}px`;
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      if (target) target.style.paddingLeft = "";
    };
  }, [width, hideBelow, pushTargetSelector]);

  return (
    <>
      <div className="left-edge" aria-hidden="true">
        <svg
          className="ribbon"
          width={width}
          height="100%"
          viewBox="0 0 130 1000"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 130,0 104,195 0,130" fill={dark} />
          <polygon points="0,330 104,195 70,520 0,435" fill={accent} />
          <polygon points="0,435 70,520 130,680 0,1000" fill={dark} />
          <polygon points="0,1000 0,965 130,820 130,1000" fill={accent} />
        </svg>
      </div>

      <style jsx>{`
        .left-edge {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: ${width}px;
          pointer-events: none;
          z-index: 2;
        }
        .ribbon {
          height: 100vh;
        }
        @media (max-width: ${hideBelow}px) {
          .left-edge {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default LeftEdgePattern;
