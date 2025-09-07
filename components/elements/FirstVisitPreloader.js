"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Preloader from "./Preloader";

export default function FirstVisitPreloader({ children, pageKey }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on first visit to this page
    const hasVisited =
      typeof window !== "undefined"
        ? localStorage.getItem(`visited_${pageKey}`)
        : "1";

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const finish = () => {
      setIsLoading(false);
      try {
        localStorage.setItem(`visited_${pageKey}`, "true");
      } catch {}
    };

    // If everything is already loaded
    if (typeof document !== "undefined" && document.readyState === "complete") {
      const id = setTimeout(finish, 300);
      return () => clearTimeout(id);
    }

    // Wait for the whole page (all resources) to load
    window.addEventListener("load", finish);

    // Fallback: don't block forever
    const timeoutId = setTimeout(finish, 10000);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(timeoutId);
    };
  }, [pageKey]);

  // Prevent background scrolling while loading
  useEffect(() => {
    if (!isLoading) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isLoading]);

  return (
    <>
      {/* Always render children so their assets can load */}
      {children}

      {/* Fullscreen overlay while loading */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0b0b0b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden="true"
        >
          <Preloader />
        </div>
      )}
    </>
  );
}

FirstVisitPreloader.propTypes = {
  children: PropTypes.node.isRequired,
  pageKey: PropTypes.string.isRequired,
};


