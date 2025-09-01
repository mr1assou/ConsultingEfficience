"use client"
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import AboutTwo4 from "@/components/sections/AboutTwo4";
import ServicesFour4 from "@/components/sections/ServicesFour4";
import LeftEdgePattern from "@/components/elements/LeftEdgePatter";
import Image from "next/image";

export default function Home3() {
  // ✅ taille du badge responsive
  const [size, setSize] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1380) {
        setSize(110); // petit écran
      } else {
        setSize(200); // grand écran
      }
    };

    handleResize(); // vérifier dès le chargement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} bodyCls="home-three">
        {/* Left decorative ribbon */}
        {/* <LeftEdgePattern
          width={130}
          dark="#2C5172"
          accent="#4A8F3F"
          hideBelow={768}
          zIndex={2}
        /> */}

        <ServicesFour4 />
        <AboutTwo4 />

        <div className="headline-wrap style-three color-black">
          <span className="marquee-wrap bg-white py-15">
            <span className="marquee-inner left">
              <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
            </span>
          </span>
        </div>

        {/* ✅ Badge fixe Qualiopi responsive */}
        <div
          style={{
            position: "fixed",
            right: "0px",
            top: "80%",
            transform: "translateY(-50%)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: `${size}px`,
            height: `${size}px`,
            background: "#fff",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            borderRadius: "50%",
          }}
        >
          <Image
            src="/assets/images/hero/qualiopi.png"
            alt="Qualiopi"
            width={200}
            height={200}
            priority
            style={{
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain", // 👈 garde le logo net
            }}
          />
        </div>
      </Layout>
    </>
  );
}
